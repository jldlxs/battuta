import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonText, IonList, IonListHeader, IonItem, IonButton, IonHeader, IonToolbar, ModalController } from '@ionic/angular/standalone';
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
/* COMPONENTE: ACCESS AND SECURITY PAGE */
/* ======================================== */

@Component({
  selector: 'app-access-and-security',
  templateUrl: './access-and-security.page.html',
  styleUrls: ['./access-and-security.page.scss'],
  standalone: true,
  imports: [IonToolbar, IonHeader, IonButton, IonItem, IonListHeader, IonList, IonText, IonContent, IonTitle, CommonModule, FormsModule]
})
export class AccessAndSecurityPage implements OnInit {

  /* ======================================== */
  /* PROPRIEDADES */
  /* ======================================== */

  /** Controlador de modais do Ionic */
  private modalCtrl: ModalController = inject(ModalController);

  /** Lista de usuários da página */
  users = [
    {
      username: 'fulano.de.tal',
      fullName: 'Fulano de Tal da Silva',
      lastAccess: '14/07/2025 14:59',
      accessRemote: true,
      permissions: true,
    },
    {
      username: 'ciclana.pereira',
      fullName: 'Ciclana Pereira Souza',
      lastAccess: '13/07/2025 08:30',
      accessRemote: true,
      permissions: true,
    },
    {
      username: 'beltrano.costa',
      fullName: 'Beltrano Costa e Silva',
      lastAccess: '12/07/2025 18:00',
      accessRemote: false,
      permissions: true,
    },
  ];

  constructor() { }

  ngOnInit() {
    // Inicialização da página
  }

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

      // Verificar se há dados de usuário para adicionar à lista
      if (data.data) {
        console.log('Usuário criado:', data.data);
        // Adicionar o novo usuário à lista
        this.addNewUser(data.data);
      }
    } else {
      console.log('Modal fechada sem ação');
    }
  }

  /* ======================================== */
  /* MÉTODOS PRIVADOS */
  /* ======================================== */

  /**
   * Adiciona um novo usuário à lista de usuários
   * @param userData - Dados do usuário criado
   */
  private addNewUser(userData: any): void {
    // Criar novo usuário com dados da modal
    const newUser = {
      username: userData.username || 'novo.usuario',
      fullName: userData.collaboratorName || 'Novo Usuário',
      lastAccess: 'Agora',
      accessRemote: true,
      permissions: true,
    };

    // Adicionar à lista de usuários
    this.users.unshift(newUser);

    console.log('Novo usuário adicionado:', newUser);
    console.log('Lista atualizada:', this.users);
  }
}
