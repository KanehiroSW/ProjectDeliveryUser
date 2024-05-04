import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginRequest } from '../services/auth/loginRequest';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  loginError:string="";

  loginForm=this.formBuilder.group({
    dni:['',Validators.required],
    password: ['',Validators.required],
  })

  constructor(private modalController:ModalController, private formBuilder:FormBuilder, private router:Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  get dni(){ return this.loginForm.controls.dni; }
  get password(){ return this.loginForm.controls.password; }

  login() {
    if(this.loginForm.valid){
      this.loginError="";
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          // this.loginError=errorData;
          this.loginError = "¡El DNI o la contraseña son incorrectos!";
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/tabs/tab1');
          this.modalController.dismiss();
          this.loginForm.reset();
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}