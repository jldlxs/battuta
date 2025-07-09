import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonSpinner,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonSpinner
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage implements OnInit {
   username: string = '';
  public password: string = '';
  public showError: boolean = false;
  public isLoading: boolean = false;
  public toastMessage: string = '';
  public toastColor: string = 'primary';

  constructor(private toastController: ToastController) {}

  ngOnInit() {}

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      color
    });
    await toast.present();
  }

  showRestrictedToast() {
    this.toastMessage = 'Funcionalidade de acesso restrito solicitada.';
    this.toastColor = 'primary';
    this.presentToast(this.toastMessage, this.toastColor);
  }

  onLogin() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      if (!this.username || !this.password) {
        this.showError = true;
        this.toastMessage = 'Por favor, preencha todos os campos.';
        this.toastColor = 'danger';
        this.presentToast(this.toastMessage, this.toastColor);
        return;
      }

      if (this.username !== 'admin' || this.password !== '123456') {
        this.showError = true;
        this.toastMessage = 'Dados de acesso não encontrados. Verifique os dados informados.';
        this.toastColor = 'danger';
        this.presentToast(this.toastMessage, this.toastColor);
        return;
      }

      this.showError = false;
      this.toastMessage = 'Acesso autorizado com sucesso!';
      this.toastColor = 'success';
      this.presentToast(this.toastMessage, this.toastColor);

      // Redirecionamento pode ser colocado aqui se necessário
    }, 1000);
  }
}
