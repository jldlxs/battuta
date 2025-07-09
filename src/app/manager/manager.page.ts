import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
  IonItem,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonLabel,
  IonCard,
  IonItemGroup,
  IonFooter,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  MenuController,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

/**
 * Interface para os itens do menu
 * @interface MenuItem
 * @property {string} icon - Caminho para o ícone do item do menu
 * @property {string} title - Título do item do menu
 * @property {string} description - Descrição do item do menu
 * @property {string} url - URL para onde o item do menu deve redirecionar, opcional
 * @property {MenuItem[]} [children] - Lista de subitens do menu, opcional
 * @property {boolean} open - Mostra se o submenu do item está aberto ou não
 */
interface MenuItem {
  icon: string;
  title: string;
  description: string;
  url?: string;
  children?: MenuItem[];
  open?: boolean;
}

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
    IonIcon,
    IonButton,
    IonButtons,
    IonFooter,
    IonItem,
    IonItemGroup,
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
    IonItem,
    CommonModule,
    FormsModule,
    IonSplitPane,
    IonMenu,
    IonRouterOutlet,
    IonText,
    IonItemGroup,
    IonButtons,
    IonButton,
    IonList,
  ],
})
export class ManagerPage implements OnInit {
  /** Serviço de roteamento usado para navegação entre páginas. */
  private router = inject(Router);

  /** Controlador do menu lateral do Ionic, usado para abrir e fechar o menu. */
  private menuCtrl = inject(MenuController);

  /** Lista dos itens que serão exibidos no menu lateral (sidebar). @type {MenuItem[]} */
  menu: MenuItem[] = MENU_ITEM;

  /**
   * Retorna true se o item do menu tem filhos
   * @param menuItem Item do menu
   */
  hasChildren(menuItem: MenuItem): boolean {
    return !!(menuItem.children && menuItem.children.length > 0);
  }

  /**
   * Abre ou fecha submenus do item clicado.
   * @param item Item do menu clicado
   */
  toggle(item: MenuItem) {
    item.open = !item.open;
  }

  /**
   * Navega para a página correspondente do item clicado.
   * @param item Item do menu clicado.
   */
  navigationByUrl(item: MenuItem) {
    this.router.navigateByUrl(item.url!);
    this.menuCtrl.close();
  }

  /**
   * Fecha recursivamente todos os submenus.
   * @param items Lista de itens de menu a serem processados (padrão: `this.menu`).
   */
  closeAllMenus(items: MenuItem[] = this.menu) {
    items.forEach((item) => {
      item.open = false;
      if (this.hasChildren(item)) {
        this.closeAllMenus(item.children!);
      }
    });
  }

  /** Método chamado ao inicializar o componente. */
  ngOnInit() {}
}

const MENU_ITEM: MenuItem[] = [
  {
    icon: '#book-open',
    title: 'Orçamentos',
    description: 'Orçamentos e precificação',
    children: [
      {
        icon: '#',
        title: 'Submenu 1',
        description: 'Descrição do submenu 1',
        url: '#',
      },
      {
        icon: '#',
        title: 'Submenu 2',
        description: 'Descrição do submenu 2',
        url: '#',
      },
      {
        icon: '#',
        title: 'Submenu 3',
        description: 'Descrição do submenu 3',
        url: '#',
      },
      {
        icon: '#',
        title: 'Submenu 4',
        description: 'Descrição do submenu 4',
        url: '#',
      },
    ],
  },
  {
    icon: '#cube-transparent',
    title: 'Produção',
    description: 'Gerenciar preparo, produção e montagem',
    url:'/manager?production'
  },
  {
    icon: '#arrows-right-left',
    title: 'Logística',
    description: 'Estoque e disponibilidade de material',
    children: [
      {
        icon: '#',
        title: 'Submenu 2',
        description: 'Descrição do submenu 1',
        url: '#',
      },
    ],
  },
  {
    icon: '#rectangle-stack',
    title: 'Estoque',
    description: 'Estoque e disponibilidade de material',
    url: '/manager?stock',
  },
];
