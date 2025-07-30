import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonText, IonList, IonListHeader, IonItem, IonButton, IonHeader, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-access-and-security',
  templateUrl: './access-and-security.page.html',
  styleUrls: ['./access-and-security.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonButton, IonItem, IonListHeader, IonList, IonText, IonContent, IonTitle, CommonModule, FormsModule]
})
export class AccessAndSecurityPage implements OnInit {

  /**  */
  users = [
    {
      username: 'fulano.de.tal',
      fullName: 'Fulano de Tal da Silva',
      lastAccess: '14/07/2025 14:59',
      accessRemote: true,
      permissions: true,

    },
    {
      username: 'ciclana.pereira',
      fullName: 'Ciclana Pereira Souza',
      lastAccess: '13/07/2025 08:30',
      accessRemote: true,
      permissions: true,
    },
    {
      username: 'beltrano.costa',
      fullName: 'Beltrano Costa e Silva',
      lastAccess: '12/07/2025 18:00',
      accessRemote: false,
      permissions: true,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
