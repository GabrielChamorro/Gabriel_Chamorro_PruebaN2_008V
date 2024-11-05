import { Injectable } from '@angular/core';

//Importaciones para trabajar con Http requests y observadores
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//importar interfazes que voy a usar

import { ProductosFormato } from '../interfaces/GB_CH_interfazProductos';
import { RespuestaAPIProductosFormato } from '../interfaces/GB_CH_interfazRespuestaAPIProductos';

@Injectable({
  providedIn: 'root'
})
export class GbChApiProductosService {
  //en teoria deberia podria poder traer la variavel "usuarioActual" de el otro servicio
  public productoActual: ProductosFormato | null = null;
  public respuestaApiActual: RespuestaAPIProductosFormato | null = null;
  private readonly UrlParaProductos = "https://dummyjson.com/auth/products"

  constructor(
    private Http : HttpClient
  ) { }
}
