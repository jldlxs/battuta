import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSpinner, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonSpinner, IonInput],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public showError: boolean = false;
  public isLoading: boolean = false;



  constructor() { }

  ngOnInit() { }



  onLogin() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      if (!this.username || !this.password) {
        this.showError = true;


        return;
      }

      if (this.username !== 'admin' || this.password !== '123456') {
        this.showError = true;



        return;
      }

      this.showError = false;



      // Redirecionamento pode ser colocado aqui se necessário
    }, 1000);
  }
}
