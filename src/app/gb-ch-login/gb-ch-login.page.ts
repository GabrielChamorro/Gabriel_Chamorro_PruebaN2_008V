import { Component, OnInit } from '@angular/core';

//importar servicio
import { GBCHApiLoginService } from '../services/gb-ch-api-login.service';

//importaciones importantes para trabajar con formularios y validar estos (lo voy a hacer en el login y despues lo copio y pego al catalogo)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gb-ch-login',
  templateUrl: './gb-ch-login.page.html',
  styleUrls: ['./gb-ch-login.page.scss'],
})
export class GBCHLoginPage implements OnInit, ViewWillEnter{

  public formulario: FormGroup
  constructor(
    //injecto aqui los servicios que usare
    //tambien hace que no sean tan dificiles de llamar
    private FoBu: FormBuilder,
    public login: GBCHApiLoginService,
    private router: Router,
  ) { 
    this.formulario = FoBu.group({
      usuario: ["",[Validators.required, Validators.minLength(3)]],
      contrasenia: ["",[Validators.required, Validators.minLength(3)]]
    })
  }

  public datosFormulario(){
    const usuario = this.formulario.getRawValue()?.usuario
    const contrasenia = this.formulario.getRawValue()?.contrasenia
    this.login.Loguearse(usuario, contrasenia)
    this.router.navigate(['/gb-ch-catalogo'])
    
  }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    
  }
}
