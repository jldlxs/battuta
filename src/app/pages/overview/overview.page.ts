import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonIcon, ModalController } from '@ionic/angular/standalone';
import { UserCreateComponent } from '../../components/modals/user-create/user-create.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuToggle, IonButton, IonIcon]
})
export class OverviewPage implements OnInit {
  /** Controlador de modais do Ionic */


  constructor() { }

  ngOnInit() { }
}
