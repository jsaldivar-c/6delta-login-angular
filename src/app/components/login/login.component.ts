import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Usuario } from '../../models/usuarios.model';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    // public usuario: Usuario[] = [];
    angForm: FormGroup;

    constructor(
        private loginService: LoginService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.angForm = this.fb.group({
            usuario: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    postdata(angForm1) {
        this.loginService
            .userLogin(angForm1.value.usuario, angForm1.value.password)
            .pipe(first())
            .subscribe(
                (data) => {
                    const redirect = this.loginService.redirectUrl
                        ? this.loginService.redirectUrl
                        : '/inicio';
                    this.router.navigate([redirect]);
                },
                (error) => {
                    alert('Usuario o password incorrecto');
                }
            );
    }
}
