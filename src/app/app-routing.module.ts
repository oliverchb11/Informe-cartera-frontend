import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'sucursal'  , component:SucursalComponent
  },
  {
    path:'**', pathMatch:'full', redirectTo:'sucursal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
