import { Component, OnInit } from '@angular/core';

//importaciones importantes para trabajar con formularios y validar estos (lo voy a hacer en el login y despues lo copio y pego al catalogo)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gb-ch-login',
  templateUrl: './gb-ch-login.page.html',
  styleUrls: ['./gb-ch-login.page.scss'],
})
export class GBCHLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
