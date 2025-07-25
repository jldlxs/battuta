import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IonList, IonItemGroup, MenuController, } from '@ionic/angular/standalone';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { Router } from '@angular/router';

/** Componente responsável por renderizar uma lista de itens de menu, incluindo submenus aninhados. Ele gerencia a navegação e o estado (aberto/fechado) dos itens. */
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  standalone: true,
  imports: [IonItemGroup, IonList, MenuItemComponent],
})
export class MenuListComponent {

  /** Serviço de roteamento do Angular para navegação entre páginas.*/
  private router: Router = inject(Router);

  /** Controlador para operações no menu lateral */
  private menuCtrl: MenuController = inject(MenuController);

  /** Lista de itens de menu a serem renderizadas. @input */
  @Input({ required: true }) menuItems: MenuItem[] = [];

  /** 
   * Verifica se um item possui subitens. 
   * @param {MenuItem} menuItem - Item a ser verificado. 
   * @returns {boolean} `true` se o item possui subitens, `false` caso contrário. 
   */
  onHasChildren(menuItem: MenuItem): boolean {
    return !!(menuItem.children && menuItem.children.length > 0);
  }

  /** 
   * Alterna o estado de expansão de um item com submenu.
   * @param {MenuItem} menuItem - Item que terá seu estado alterado.
   */
  onToggle(menuItem: MenuItem): void {
    menuItem.open = !menuItem.open;
  }

  /** 
   * Navega para a URL do item e fecha o menu lateral.
   * @param {MenuItem} menuItem - Item contendo a URL de destino. 
   */
  onNavigationByUrl(menuItem: MenuItem): void {
    this.router.navigateByUrl(menuItem.url!);
    this.menuCtrl.close();
  }

  /** 
   * Fecha recursivamente todos os submenus abertos. 
   * @param {MenuItem[]} [menuItems=this.menuItems] - Lista de itens para processar. 
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
