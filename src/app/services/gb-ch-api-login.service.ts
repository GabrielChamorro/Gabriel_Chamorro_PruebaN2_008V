import { Injectable } from '@angular/core';

//Importaciones para trabajar con Http requests y observadores
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//Importo aqui la interfaz para poder trabajar con ella
import { LoginFormato } from './../interfaces/GB_CH_interfazLogin'

@Injectable({
  providedIn: 'root'
})
export class GBCHApiLoginService {
  //colocar aqui las variables y observadores por temas de orden
  //creo la variable que almacenara los datos de el usuario actual, ya inicialisada (con nada adentro)
  //tambien creo la variable para el token, espero que funcione o si no voy a dejar que un zombistein me mate a palos (en el juego)
  public usuarioActual: LoginFormato | null = null;
  public tokenDeAcceso: string | null = null;
  private readonly UrlParaLogin = "https://dummyjson.com/auth/login"
  
  constructor(
    //debo asignarle una variable a HttpCliente para poder llamarlo y usarlo despues
    private Http : HttpClient
  ) { }
  
}
