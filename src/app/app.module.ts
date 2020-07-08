import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas de mi aplicacion
import { AppRoutingModule } from './app-routing.module';
//componentes de mi aplicacion
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
// modulo http para consimir apis del backend
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
