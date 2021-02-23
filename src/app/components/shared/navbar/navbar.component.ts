import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';
import { Menu } from '../../../models/menu.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    public menus: Menu[] = [new Menu('Test', 'Test', 'Test', 20)];
    constructor(private loginService: LoginService) {}

    ngOnInit(): void {
        this.obtenerMenu();
    }
    obtenerMenu() {
        return this.loginService.getMenus().subscribe((menus: Menu[]) => {
            this.menus = menus;
            // console.log(this.menus);
        });
    }
}
