import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonMenuToggle, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSplitPane, IonMenu, IonMenuToggle, IonRouterOutlet]
})
export class ManagerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
