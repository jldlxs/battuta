import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IonList, IonItemGroup, MenuController, } from '@ionic/angular/standalone';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from 'src/app/types/menu-item';
import { Router } from '@angular/router';

/**
 * @class MenuListComponent
 * @description Componente responsável por renderizar uma lista de itens de menu,
 * incluindo submenus aninhados. Ele gerencia a navegação e o estado (aberto/fechado) dos itens.
 */
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  standalone: true,
  imports: [IonItemGroup, IonList, MenuItemComponent],
})
export class MenuListComponent {

  /** Serviço de roteamento do Angular para navegação entre páginas. */
  private router = inject(Router);

  /** Controlador do menu lateral do Ionic para fechar o menu após a navegação. */
  private menuCtrl = inject(MenuController);

  /**
   * @property {MenuItem[]} menuItems
   * @description A lista de itens de menu a ser exibida.
   */
  @Input({ required: true }) menuItems: MenuItem[];

  /**
   * Verifica se um determinado item de menu possui itens filhos.
   * @param {MenuItem} menuItem - O item de menu a ser verificado.
   * @returns {boolean} Retorna `true` se o item de menu possui filhos, caso contrário `false`.
   */
  onHasChildren(menuItem: MenuItem): boolean {
    return !!(menuItem.children && menuItem.children.length > 0);
  }

  /**
   * Alterna a visibilidade dos submenus de um item de menu (aberto/fechado).
   * @param {MenuItem} menuItem - O item de menu que terá seu estado alterado.
   */
  onToggle(menuItem: MenuItem) {
    menuItem.open = !menuItem.open;
  }

  /**
   * Navega para a URL associada a um item e, em seguida, fecha o menu lateral.
   * @param {MenuItem} menuItem - O item de menu que contém a URL de destino.
   */
  onNavigationByUrl(menuItem: MenuItem) {
    this.router.navigateByUrl(menuItem.url!);
    this.menuCtrl.close();
  }

  /**
   * Fecha recursivamente todos os submenus abertos na lista.
   * @param {MenuItem[]} [menuItems=this.menuItems] - A lista de itens de menu a ser processada.
   */
  closeAllMenus(menuItems: MenuItem[] = this.menuItems) {
    for (const item of menuItems) {
      item.open = false;
      if (this.onHasChildren(item)) {
        this.closeAllMenus(item.children!);
      }
    }
  }
}
