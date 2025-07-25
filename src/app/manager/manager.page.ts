import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSplitPane, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonText, IonCard, IonFooter, IonButtons, IonIcon, ModalController } from '@ionic/angular/standalone';
import { MENU_ITEM, MenuItem } from '../interfaces/menu-item';
import { MenuListComponent } from '../components/menu/menu-list/menu-list.component';
import { CompanySelectorComponent, CompanySelectorDismiss } from '../components/modals/company-selector/company-selector.component';
import { COMPANIES, Company } from '../interfaces/company';

/** Esta página atua como o layout principal após o usuário logar, contendo o menu lateral (sidebar) com as opções de navegação para as diferentes seções do sistema. */
@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonSplitPane, IonMenu, IonRouterOutlet, IonHeader, IonToolbar, IonContent, IonText, IonCard, IonFooter, IonButtons, IonIcon, MenuListComponent],
})
export class ManagerPage implements OnInit {
  /** Controlador para a criação e gerenciamento de janelas modais do Ionic */
  private modalCtrl: ModalController = inject(ModalController);

  /** Referência ao componente de menu para controle programático. Utilizado para fechar submenus quando o painel lateral é ocultado. */
  @ViewChild(MenuListComponent) menuListRef: MenuListComponent;

  /** Lista de itens exibidos no menu de navegação principal. */
  menuItems: MenuItem[] = [];

  /** Empresas disponíveis para seleção. */
  companies: Company[] = [];

  /** Empresa selecionada pelo usuário. */
  selectedCompany: Company;

  /** Fecha todos os submenus abertos quando o painel lateral é ocultado. */
  onHideMenu(): void {
    this.menuListRef.closeAllMenus();
  }

  /** 
   * Exibe modal para seleção de empresa.
   * @async 
   * @returns {Promise<void>} Uma promessa que é resolvida quando a interação com o modal é concluída. 
   */
  async openModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: CompanySelectorComponent,
      id: "modal-company-selector",
      componentProps: {
        companies: this.companies,
        selectedCompany: this.selectedCompany
      }
    });
    modal.present();

    const { data, role }: { data?: Company; role?: string } = await modal.onWillDismiss();

    if (role === CompanySelectorDismiss.access && data) {
      this.selectedCompany = data;
      localStorage.setItem("selectedCompany", data.cnpj)
    }
  }

  /**
   * Inicializa dados do componente:
   * 1. Carrega itens do menu
   * 2. Carrega lista de empresas
   * 3. Recupera empresa selecionada do localStorage
   */
  ngOnInit(): void {
    this.menuItems = MENU_ITEM;
    this.companies = COMPANIES;

    // Recupera a Empresa que foi selecionada pelo Usuário guardado no LocalStorage
    const restoreSelectedCompany: Company | undefined = this.companies.find(
      company => company.cnpj === localStorage.getItem("selectedCompany")
    )

    if (restoreSelectedCompany)
      this.selectedCompany = restoreSelectedCompany;
  }

}
