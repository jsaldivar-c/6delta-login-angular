import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { GraficosComponent } from './components/graficos/graficos.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'tareas', component: TareasComponent },
    { path: 'tracking', component: TrackingComponent },
    { path: 'graficos', component: GraficosComponent },
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
