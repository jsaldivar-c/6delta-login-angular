import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        InicioComponent,
        TareasComponent,
        TrackingComponent,
        GraficosComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
