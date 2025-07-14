import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSplitPane, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonText, IonLabel, IonCard, IonFooter, IonButtons, IonIcon, IonNote, } from '@ionic/angular/standalone';
import { MENU_ITEM, MenuItem } from '../types/menu-item';
import { MenuListComponent } from '../components/menu/menu-list/menu-list.component';

/**
 * @class ManagerPage
 * @description Esta página atua como o layout principal após o usuário logar,
 * contendo o menu lateral (sidebar) com as opções de navegação para as
 * diferentes seções do sistema.
 * @implements {OnInit}
 */
@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonSplitPane, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonText, IonCard, IonFooter, IonButtons, IonIcon, IonNote, MenuListComponent,],
})
export class ManagerPage implements OnInit {
  /**
   * @property {MenuListComponent} menuListRef
   * @description Referência ao componente `MenuListComponent` no template.
   * Usado para invocar métodos do componente filho, como `closeAllMenus`.
   */
  @ViewChild('menulist') menuListRef!: MenuListComponent;

  /**
   * @property {MenuItem[]} menuItems
   * @description A lista de itens que será exibida no menu lateral (sidebar).
   */
  menuItems: MenuItem[];

  /**
   * É acionado quando o menu lateral é fechado.
   * Invoca o método `closeAllMenus` do componente `MenuListComponent`
   * para garantir que todos os submenus sejam recolhidos, resetando o estado do menu.
   */
  hideMenu() {
    this.menuListRef.closeAllMenus();
  }

  /** @description Método chamado ao inicializar o componente. */
  ngOnInit() {
    this.menuItems = MENU_ITEM;
  }
}
