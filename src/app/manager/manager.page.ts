import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonLabel,
  IonCard,
  IonFooter,
  IonButtons,
  IonButton,
  IonIcon,
  IonNote,
} from '@ionic/angular/standalone';
import { MENU_ITEM, MenuItem } from '../types/menu-item';
import { MenuListComponent } from '../components/menu/menu-list/menu-list.component';


/**
 * @class ManagerPage
 * @description Esta página contém o menu lateral (sidebar) com opções de navegação para diferentes
 * seções do sistema.
 * @implements {OnInit}
 */
@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonIcon,
    IonButton,
    IonButtons,
    IonFooter,
    IonText,
    IonLabel,
    IonCard,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonFooter,
    IonCard,
    IonLabel,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    CommonModule,
    FormsModule,
    IonSplitPane,
    IonMenu,
    IonRouterOutlet,
    IonText,
    IonButtons,
    IonButton,
    MenuListComponent,
  ],
})
export class ManagerPage implements OnInit {
  /** */
  @ViewChild('menulist') menuListRef!: MenuListComponent;

  /** Lista dos itens que serão exibidos no menu lateral (sidebar). @type {MenuItem[]} */
  menuItems: MenuItem[] = MENU_ITEM;

  /** Método chamado quando o menu é fechado, acionando o método de fechar todo os menus do `app-menu-list` */
  hideMenu() {
    this.menuListRef.closeAllMenus();
  }

  /** Método chamado ao inicializar o componente. */
  ngOnInit() {}
}
