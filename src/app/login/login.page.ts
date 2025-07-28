import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSpinner, IonInput, IonButton } from '@ionic/angular/standalone';

/** Tela responsável por logar o usuário ao sistema */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonSpinner, IonInput, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public showError: boolean = false;
  public isLoading: boolean = false;

  /** Valida se o nome de usuário e a senha foram preenchidos corretamente, mostra uma mensagem de erro em caso de falha, e define o estado de carregamento durante o processo (com simulação de delay). */
  onLogin(): void {
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
    }, 1000);
  }

  constructor() { }

  ngOnInit() { }
}
