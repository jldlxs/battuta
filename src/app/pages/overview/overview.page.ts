import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuToggle, IonButton, IonIcon, ModalController } from '@ionic/angular/standalone';
import { UserCreateComponent } from '../../components/modals/user-create/user-create.component';

/* ======================================== */
/* INTERFACES */
/* ======================================== */

/**
 * Interface para definir uma permissão de módulo
 */
interface Permission {
  module: string;
  access: boolean;
  edit: boolean;
}

/**
 * Interface para definir as opções da modal
 */
interface ModalOptions {
  title?: string;
  permissions: Permission[];
  showUserFields?: boolean;
}

/* ======================================== */
/* COMPONENTE: OVERVIEW PAGE */
/* ======================================== */

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuToggle, IonButton, IonIcon]
})
export class OverviewPage implements OnInit {

  /* ======================================== */
  /* PROPRIEDADES */
  /* ======================================== */

  /** Controlador de modais do Ionic */
  private modalCtrl: ModalController = inject(ModalController);

  /* ======================================== */
  /* CONSTRUTOR */
  /* ======================================== */

  constructor() { }

  /* ======================================== */
  /* LIFECYCLE HOOKS */
  /* ======================================== */

  ngOnInit() {
    // Inicialização da página
  }

  /* ======================================== */
  /* MÉTODOS PÚBLICOS */
  /* ======================================== */

  /**
   * Abre o modal de criação de usuário com opções personalizadas
   * Segue o padrão estabelecido: array de opções + onDidDismiss()
   */
  async openUserCreateModal(): Promise<void> {
    // Array de opções para a modal (padrão solicitado pelo gerente)
    const modalOptions: ModalOptions = {
      title: 'Adicionar Usuário',
      permissions: [
        { module: 'PROJETOS', access: true, edit: false },
        { module: 'LOGÍSTICA', access: true, edit: false }
      ],
      showUserFields: true
    };

    // Criar e apresentar a modal com as opções
    const modal = await this.modalCtrl.create({
      component: UserCreateComponent,
      componentProps: {
        modalOptions: modalOptions
      },
      cssClass: 'user-create-modal'
    });

    // Apresentar a modal
    await modal.present();

    // Capturar o resultado usando onDidDismiss() (padrão solicitado)
    const { data, role } = await modal.onDidDismiss();

    // Processar o resultado da modal
    if (data && data.success) {
      console.log('Modal fechada com sucesso:', data);

      // Verificar se há dados de usuário
      if (data.data) {
        console.log('Usuário criado:', data.data);
        // Aqui você pode adicionar a lógica para salvar o usuário
        this.handleUserCreation(data.data);
      }

      // Verificar se há uma permissão selecionada
      if (data.selectedPermission) {
        console.log('Permissão selecionada:', data.selectedPermission);
        // Aqui você pode adicionar a lógica para processar a permissão
        this.handlePermissionSelection(data.selectedPermission);
      }
    } else {
      console.log('Modal fechada sem ação');
    }
  }

  /**
   * Abre o modal apenas para seleção de permissões (sem campos de usuário)
   * Demonstra a flexibilidade do padrão implementado
   */
  async openPermissionSelectorModal(): Promise<void> {
    // Array de opções para seleção de permissões
    const permissionOptions: ModalOptions = {
      title: 'Selecionar Permissões',
      permissions: [
        { module: 'PROJETOS', access: false, edit: false },
        { module: 'LOGÍSTICA', access: false, edit: false },
        { module: 'FINANCEIRO', access: false, edit: false },
        { module: 'RH', access: false, edit: false },
        { module: 'MARKETING', access: false, edit: false }
      ],
      showUserFields: false // Não mostrar campos de usuário
    };

    // Criar e apresentar a modal
    const modal = await this.modalCtrl.create({
      component: UserCreateComponent,
      componentProps: {
        modalOptions: permissionOptions
      },
      cssClass: 'user-create-modal'
    });

    await modal.present();

    // Capturar o resultado usando onDidDismiss()
    const { data, role } = await modal.onDidDismiss();

    if (data && data.success) {
      console.log('Permissões selecionadas:', data);
      this.handlePermissionSelection(data.selectedPermission);
    }
  }

  /* ======================================== */
  /* MÉTODOS PRIVADOS */
  /* ======================================== */

  /**
   * Processa a criação de um novo usuário
   * @param userData - Dados do usuário criado
   */
  private handleUserCreation(userData: any): void {
    // Implementar lógica de criação de usuário
    console.log('Processando criação de usuário:', userData);

    // Exemplo: enviar para API, salvar no banco, etc.
    // this.userService.createUser(userData);
  }

  /**
   * Processa a seleção de uma permissão
   * @param permission - Permissão selecionada
   */
  private handlePermissionSelection(permission: Permission): void {
    // Implementar lógica de processamento da permissão
    console.log('Processando permissão selecionada:', permission);

    // Exemplo: aplicar permissão, salvar configuração, etc.
    // this.permissionService.applyPermission(permission);
  }
}
