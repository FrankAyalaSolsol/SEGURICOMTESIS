import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { PreEstudioComponent } from './components/pre-estudio/pre-estudio.component';
import { PaginaInicioUsuarioComponent } from './components/pagina-inicio-usuario/pagina-inicio-usuario.component';



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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
