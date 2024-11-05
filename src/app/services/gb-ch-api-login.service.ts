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
  private correcto = new BehaviorSubject<LoginFormato | null>(null);
  public $correcto = this.correcto.asObservable;
 
  private cargando = new BehaviorSubject<boolean>(false);
  public $cargando = this.cargando.asObservable
  
  //creo la variable que almacenara los datos de el usuario actual, ya inicialisada (con nada adentro)
  //tambien creo la variable para el token, espero que funcione o si no voy a dejar que un zombistein me mate a palos (en el juego)
  public usuarioActual: LoginFormato | null = null;
  public tokenDeAcceso: string | null = null;
  private readonly UrlParaLogin = "https://dummyjson.com/auth/login"
  
  constructor(
    //debo asignarle una variable a HttpCliente para poder llamarlo y usarlo despues
    private Http : HttpClient
  ) { }
  
  public Loguearse (usuario: string, contrasenia: string){
    //cuerpo de que se va a usar para poder enviar 
    const cuerpo = {
      //a la izquierda se tiene el nombre de las variables que recibe el back-end
      //a la derecha esta el nombre que van a tener las variables para el html y el sistema (excepto en el servicio)
      //se esta asignando que username sera igual a usuario
      username : usuario,
      password : contrasenia
    }
    
    //el post es de tipo "LoginFormato"
    //aqui deberia añadir una verficicacion para verificar si la operacion es exitosa
    //y si lo es se debe almacenar el token en la variable usando un if
    this.cargando.next(true);
    this.Http.post<LoginFormato>(
      //el formato aqui es de acuerdo a lo especificado por dummyjson (osea la lecera que usa la prueba como backend)
      this.UrlParaLogin,
      JSON.stringify(cuerpo),
      {
        headers: {
        "Content-Type": "application/json"
        }
      }
    )
    
    .subscribe(datos => {
      this.usuarioActual = datos
      console.log(datos)
      //ya no esta cargando
      this.cargando.next(false);
    })
  
  }


}
