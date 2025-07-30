import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmark, lockClosed, lockOpen, open, personAdd, close } from 'ionicons/icons';

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
}

/**
 * Interface para o resultado da modal
 */
interface ModalResult {
  success: boolean;
  data?: {
    username?: string;
    collaboratorName?: string;
    permissions: Permission[];
  };
  selectedPermission?: Permission;
}

/* ======================================== */
/* COMPONENTE: USER CREATE MODAL */
/* ======================================== */

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class UserCreateComponent implements OnInit {

  /* ======================================== */
  /* PROPRIEDADES */
  /* ======================================== */

  /** Formulário reativo para os campos de usuário */
  form: FormGroup;

  /** Opções da modal recebidas como input */
  modalOptions: ModalOptions = {
    title: 'Adicionar Usuário',
    permissions: [
      { module: 'PROJETOS', access: true, edit: false },
      { module: 'LOGÍSTICA', access: true, edit: false }
    ]
  };

  /** Dados do usuário */
  userData = {
    username: '',
    collaboratorName: ''
  };

  /** Lista de permissões (cópia das opções para manipulação) */
  permissions: Permission[] = [];

  /* ======================================== */
  /* CONSTRUTOR */
  /* ======================================== */

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    // Registrar os ícones do Ionic
    addIcons({ checkmark, lockClosed, lockOpen, open, personAdd, close });

    // Inicializar formulário reativo
    this.form = this.fb.group({
      username: [''],
      collaboratorName: ['']
    });
  }

  /* ======================================== */
  /* LIFECYCLE HOOKS */
  /* ======================================== */

  ngOnInit() {
    // Inicializar permissões com as opções recebidas
    this.initializePermissions();
  }

  /* ======================================== */
  /* MÉTODOS PRIVADOS */
  /* ======================================== */

  /**
   * Inicializa as permissões com base nas opções da modal
   */
  private initializePermissions(): void {
    // Criar cópia das permissões para evitar mutação das opções originais
    this.permissions = this.modalOptions.permissions.map(permission => ({
      ...permission
    }));
  }

  /* ======================================== */
  /* MÉTODOS PÚBLICOS */
  /* ======================================== */

  /**
   * Alterna o estado de uma permissão (acesso ou edição)
   * @param permission - Permissão a ser alterada
   * @param type - Tipo de permissão ('access' ou 'edit')
   */
  togglePermission(permission: Permission, type: 'access' | 'edit'): void {
    if (type === 'access') {
      permission.access = !permission.access;
      // Se desabilitar acesso, também desabilita edição
      if (!permission.access) {
        permission.edit = false;
      }
    } else if (type === 'edit') {
      // Só pode editar se tiver acesso
      if (permission.access) {
        permission.edit = !permission.edit;
      }
    }
  }

  /**
   * Captura a seleção de uma permissão específica
   * @param permission - Permissão selecionada
   */
  selectPermission(permission: Permission): void {
    // Retorna apenas a permissão selecionada
    this.modalCtrl.dismiss({
      success: true,
      selectedPermission: permission
    } as ModalResult);
  }

  /**
   * Cria o usuário com todas as permissões
   */
  createUser(): void {
    const result: ModalResult = {
      success: true,
      data: {
        username: this.form.get('username')?.value,
        collaboratorName: this.form.get('collaboratorName')?.value,
        permissions: this.permissions
      }
    };

    this.modalCtrl.dismiss(result);
  }

  /**
   * Cancela a operação da modal
   */
  cancel(): void {
    this.modalCtrl.dismiss({
      success: false
    } as ModalResult);
  }

  /**
   * Fecha a modal
   */
  onClose(): void {
    this.modalCtrl.dismiss({
      success: false
    } as ModalResult);
  }
}
