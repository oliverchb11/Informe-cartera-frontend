import { Sucursales } from './../../models/sucursales';
import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
sucursal: Sucursales  ;
fecha: any = {};
diasVencimiento:number;
nopagas={};
cliente: any = {};
saldo: any = {};
pedido: any = {};
informacion : any[]=[];
  constructor(private surucsalService : SucursalService) { }

  ngOnInit(): void {
    this.getSucursalCom();
    this.getSucursalComFecha();
    this.getNombreClienteCom();
    this.getFacturaNoPagadCom();
    // this.getSaldoCom();
    // this.getNumeroPedidoCom();



  }
  getSucursalCom(){
    this.surucsalService.getNombreSucursal$().subscribe((sucur)=>{
      this.sucursal = sucur;
     console.log(this.sucursal);

    });
  }
  getSucursalComFecha(){
    this.surucsalService.getFechaFactura$().subscribe(res=>{
      const date = new Date(res[0].date_entered);
      this.diasVencimiento = date.getDay();
      console.log(this.diasVencimiento);
    });
  }
  getNombreClienteCom(){
    this.surucsalService.getCliente$().subscribe((sucur)=>{
      this.cliente = sucur;
      console.log(this.cliente)

    });
  }
  getFacturaNoPagadCom(){
    this.surucsalService.getFacturasNoPagas$().subscribe(res=>{
      this.nopagas = res;
      console.log('no pagas',res)
    })
  }
  // getSaldoCom(){
  //   this.surucsalService.getSaldo$().subscribe((sucur)=>{
  //     this.saldo = sucur;
  //     this.informacion.push(this.saldo);

  //   });
  // }
  // getNumeroPedidoCom(){
  //   this.surucsalService.getNumeroPedido$().subscribe((sucur)=>{
  //     this.pedido = sucur;
  //     this.informacion.push(this.pedido);

  //   });
  // }
}
