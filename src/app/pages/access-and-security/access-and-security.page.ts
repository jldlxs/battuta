import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-access-and-security',
  templateUrl: './access-and-security.page.html',
  styleUrls: ['./access-and-security.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AccessAndSecurityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
