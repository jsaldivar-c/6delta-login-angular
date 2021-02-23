import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuarios.model';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    redirectUrl: string;
    baseUrl = 'http://localhost:8888/6delta/api3';
    baseUrl2 = 'http://localhost:8888/6delta/api2';

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) {}

    public userLogin(usuario, password) {
        alert(usuario);
        return this.http
            .post<any>(`${this.baseUrl}/login.php`, { usuario, password })
            .pipe(
                map((Usuario) => {
                    this.setToken(Usuario[0].name);
                    this.getLoggedInName.emit(true);
                    return Usuario;
                })
            );
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getMenus() {
        return this.http.get(`${this.baseUrl2}/read-menu.php`);
    }
}
