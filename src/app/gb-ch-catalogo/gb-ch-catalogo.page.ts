import { Component, OnInit } from '@angular/core';
//importo las interfazes
import { RespuestaAPIProductosFormato } from '../interfaces/GB_CH_interfazRespuestaAPIProductos';
//importaciones importantes para trabajar con formularios y validar estos (lo voy a hacer en el login y despues lo copio y pego al catalogo)
//aqui pondre el ionview will enter para cargar los productos al ingresar a la pagina y el leave por si las moscas
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
//importo subcripcion para poder manejar las subcripciones asignarle valores, para poder desuscribirme o suscribirme
import { Subscription } from 'rxjs';
import { GbChApiProductosService } from '../services/gb-ch-api-productos.service';
@Component({
  selector: 'app-gb-ch-catalogo',
  templateUrl: './gb-ch-catalogo.page.html',
  styleUrls: ['./gb-ch-catalogo.page.scss'],
})
export class GBCHCatalogoPage implements ViewWillEnter, ViewWillLeave, OnInit {
  private suscripcionProducto!: Subscription;
  //puede que esto cause problemas
  public datosProducto: RespuestaAPIProductosFormato = {products:[],total:0,skip:0,limit:0};


  constructor(
    public producto: GbChApiProductosService,
  ) { 
  }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.suscripcionProducto = this.producto.productos.subscribe(losDatos => {
      if(losDatos){
        this.datosProducto = losDatos;
        console.log("datosProducto:",this.datosProducto)
        console.log("losDatos",losDatos)
        
      }
    }); 
    this.producto.traerProductos()
    
  }

  ionViewWillLeave(): void {
    this.suscripcionProducto.unsubscribe();
  }

}
