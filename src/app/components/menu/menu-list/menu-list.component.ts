import { Component, Input, OnInit, inject } from '@angular/core';
import {
  IonList,
  IonItemGroup,
  MenuController,
} from '@ionic/angular/standalone';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItem } from 'src/app/types/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  standalone: true,
  imports: [IonItemGroup, IonList, MenuItemComponent],
})
export class MenuListComponent implements OnInit {
  /** Serviço de roteamento usado para navegação entre páginas. */
  private router = inject(Router);

  /** Controlador do menu lateral do Ionic, usado para abrir e fechar o menu. */
  private menuCtrl = inject(MenuController);

  /** */
  @Input() menuItems: MenuItem[];

  /**
   * Retorna true se o item do menu tem filhos
   * @param menuItem Ítem do menu clicado
   */
  hasChildren(menuItem: MenuItem): boolean {
    return !!(menuItem.children && menuItem.children.length > 0);
  }

  /**
   * Abre ou fecha submenus do item clicado.
   * @param menuItem Item do menu clicado
   */
  toggle(menuItem: MenuItem) {
    menuItem.open = !menuItem.open;
  }

  /**
   * Navega para a página correspondente do item clicado.
   * @param menuItem Item do menu clicado.
   */
  navigationByUrl(menuItem: MenuItem) {
    this.router.navigateByUrl(menuItem.url!);
    this.menuCtrl.close();
  }

  /**
   * Fecha recursivamente todos os submenus.
   * @param menuItems Lista de itens de menu a serem processados (padrão: `this.menu`).
   */
  closeAllMenus(menuItems: MenuItem[] = this.menuItems) {
    menuItems.forEach((item) => {
      item.open = false;
      if (this.hasChildren(item)) {
        this.closeAllMenus(item.children!);
      }
    });
  }

  ngOnInit() {}
}
