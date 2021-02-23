import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Menu } from '../../models/menu.model';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
    constructor(private loginService: LoginService) {}

    ngOnInit(): void {}
}
