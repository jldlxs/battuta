import { Component, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';

/**
 * Interface para os itens do menu
 * @interface MenuItem
 * @property {string} icon - Caminho para o ícone do item do menu
 * @property {string} title - Título do item do menu
 * @property {string} description - Descrição do item do menu
 * @property {string} url - URL para onde o item do menu deve redirecionar, opcional
 * @property {MenuItem[]} [children] - Lista de subitens do menu, opcional
 */
interface MenuItem {
  icon: string;
  title: string;
  description: string;
  url?: string;
  children?: MenuItem[];
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
  imports: [IonButton, IonButtons, IonFooter, IonItem, IonItemGroup, IonText, IonLabel, IonCard, IonContent, IonHeader, IonToolbar, IonTitle, 
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
  ],
})
export class ManagerPage implements OnInit {
  /** Lista dos itens que serão exibidos no menu lateral (sidebar). @type {MenuItem[]} */
  menu: MenuItem[] = [
    {
      icon: 'assets/menu/budget.svg',
      title: 'Orçamentos',
      description: 'Orçamentos e precificação',
      url: '/manager/budget',
    },
    {
      icon: 'assets/menu/production.svg',
      title: 'Produção',
      description: 'Gerenciar preparo, produção e montagem',
      children: [
        {
          icon: '',
          title: 'Submenu 4',
          description: 'Descrição do submenu 1',
          url: '#',
        },
        {
          icon: 'assets/menu/production-preparation.svg',
          title: 'Submenu 2',
          description: 'Descrição do submenu 2',
          url: '#',
        },
      ],
    },
    {
      icon: 'assets/menu/logistics.svg',
      title: 'Logística',
      description: 'Estoque e disponibilidade de material',
      url: '/manager/logistics',
    },
    {
      icon: 'assets/menu/stock.svg',
      title: 'Estoque',
      description: 'Estoque e disponibilidade de material',
      url: '/manager/stock',
    },
  ];

  /** Método chamado ao inicializar o componente. */
  ngOnInit() {}
}
