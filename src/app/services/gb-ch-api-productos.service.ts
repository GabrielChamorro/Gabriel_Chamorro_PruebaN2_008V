import { Injectable } from '@angular/core';

//Importaciones para trabajar con Http requests y observadores
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//importar interfazes que voy a usar
//recordar ver tema del guard
import { ProductosFormato } from '../interfaces/GB_CH_interfazProductos';
import { RespuestaAPIProductosFormato } from '../interfaces/GB_CH_interfazRespuestaAPIProductos';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class GbChApiProductosService {
  //en teoria deberia podria poder traer la variavel "usuarioActual" de el otro servicio
  private $productos = new BehaviorSubject<RespuestaAPIProductosFormato | null>(null);
  public productos = this.$productos.asObservable();

  private $cargando = new BehaviorSubject<boolean>(false);
  public cargando = this.$cargando.asObservable();

  public productoActual: ProductosFormato | null = null;
  public respuestaApiActual: RespuestaAPIProductosFormato | null = null;
  private readonly UrlParaProductos = "https://dummyjson.com/products"
  public salt: number = 0;

  constructor(
    private Http : HttpClient
  ) { }

  traerProductos(){
    this.$cargando.next(true)
    this.Http.get<RespuestaAPIProductosFormato>
    (this.UrlParaProductos)
    .subscribe(datos =>{
      this.$cargando.next(false);
      this.$productos.next(datos);
      console.log(datos)
    })
  }
  

  
}
