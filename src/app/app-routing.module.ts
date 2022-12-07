import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { PreEstudioComponent } from './components/pre-estudio/pre-estudio.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaInicioUsuarioComponent } from './pages/pagina-inicio-usuario/pagina-inicio-usuario.component';



const routes: Routes = [
  
    { path: '', redirectTo:'/Inicio', pathMatch: 'full' },
    {path: 'Inicio', component:InicioComponent},
    {path: 'Inicio_Sesion', component:InicioSesionComponent},
    {path: 'Acerca', component:AcercaComponent},
    {path: 'Crear_Cuenta', component:CrearCuentaComponent},
    {path: 'Pre_Estudio', component:PreEstudioComponent},
    {path: 'PaginaInicioUsuario', component:PaginaInicioUsuarioComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot( routes ),

    ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }
  