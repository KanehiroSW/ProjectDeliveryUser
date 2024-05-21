import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  loginForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder, 
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewWillEnter() {
    this.resetForm();
  }

  resetForm() {
    this.loginForm.reset();
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value.dni, this.loginForm.value.password)
        .subscribe(
          data => {
            this.router.navigate(['/tabs/tab1']);
            this.modalController.dismiss();
          }, error => {
            console.error('Login error', error);
          }
        );
    }
  }
}