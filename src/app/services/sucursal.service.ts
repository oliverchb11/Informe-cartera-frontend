import { Sucursales } from './../models/sucursales';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private http:HttpClient) { }

getNombreSucursal$(){
  return this.http.get<Sucursales>("http://localhost:3000/nombre-sucursal");
}
getFechaFactura$(){
  return this.http.get("http://localhost:3000/fecha-factura").pipe(map((res)=>{
    return res;

  }));

}
getCliente$(){
  return this.http.get("http://localhost:3000/nombre-cliente");
}
getSaldo$(){
  return this.http.get("http://localhost:3000/saldo");
}
getNumeroPedido$(){
  return this.http.get("http://localhost:3000/numero-pedido");
}
getFacturasNoPagas$(){
  return this.http.get("http://localhost:3000/facturas-no-pagadas");
}
}
