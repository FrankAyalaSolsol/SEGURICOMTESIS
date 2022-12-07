import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { PreEstudioComponent } from './components/pre-estudio/pre-estudio.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaInicioUsuarioComponent } from './pages/pagina-inicio-usuario/pagina-inicio-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/*const appRoute: Routes = [
  {path:'',redirectTo:'/Inicio', pathMatch:'full'},
  {path: '/components/Inicio', component:InicioComponent},
  {path: '/Inicio_Sesion', component:InicioSesionComponent},
  {path: '/Acerca', component:AcercaComponent},
  {path: '/Crear_Cuenta', component:CrearCuentaComponent},
  {path: '/Pre_Estudio', component:PreEstudioComponent},
  {path: '/PaginaInicioUsuario', component:PaginaInicioUsuarioComponent}
]

*/

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    AcercaComponent,
    CrearCuentaComponent,
    PreEstudioComponent,
    PaginaInicioUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
