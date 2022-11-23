import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { PreEstudioComponent } from './components/pre-estudio/pre-estudio.component';
import { PaginaInicioUsuarioComponent } from './components/pagina-inicio-usuario/pagina-inicio-usuario.component';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  {path:'',redirectTo:'/Inicio', pathMatch:'full'},
  {path: '/components/Inicio', component:InicioComponent},
  {path: '/Inicio_Sesion', component:InicioSesionComponent},
  {path: '/Acerca', component:AcercaComponent},
  {path: '/Crear_Cuenta', component:CrearCuentaComponent},
  {path: '/Pre_Estudio', component:PreEstudioComponent},
  {path: '/PaginaInicioUsuario', component:PaginaInicioUsuarioComponent}
]
=======

>>>>>>> 839405baae41edfc0ffbdc118c8d5d6040b59c8e


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InicioSesionComponent,
    AcercaComponent,
    CrearCuentaComponent,
    PreEstudioComponent,
    PaginaInicioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
