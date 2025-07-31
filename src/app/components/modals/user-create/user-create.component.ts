import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmark, lockClosed, lockOpen, open, personAdd, close } from 'ionicons/icons';

/* ========================================
   INTERFACES
======================================== */

// Define a estrutura de uma permissão de módulo
interface Permission {
  module: string;
  access: boolean;
  edit: boolean;
}

// Opções passadas para a modal
interface ModalOptions {
  title?: string;
  permissions: Permission[];
  showUserFields?: boolean;
}

// Estrutura de retorno da modal
interface ModalResult {
  success: boolean;
  data?: {
    username?: string;
    collaboratorName?: string;
    permissions: Permission[];
  };
  selectedPermission?: Permission;
}

/* ========================================
   COMPONENTE: UserCreateComponent
======================================== */

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class UserCreateComponent implements OnInit {

  /* ============================
     PROPRIEDADES
  ============================ */

  // Formulário reativo dos campos do usuário
  form: FormGroup;

  // Dados recebidos para configurar o modal
  @Input() modalOptions: ModalOptions = {
    title: 'Adicionar Usuário',
    permissions: [
      { module: 'PROJETOS', access: true, edit: false },
      { module: 'LOGÍSTICA', access: true, edit: false }
    ],
    showUserFields: true
  };

  // Dados do usuário (usado para envio)
  userData = {
    username: '',
    collaboratorName: ''
  };

  // Lista de permissões manipulável internamente
  permissions: Permission[] = [];

  /* ============================
     CONSTRUTOR
  ============================ */

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    // Registra ícones SVG usados no modal
    addIcons({ checkmark, lockClosed, lockOpen, open, personAdd, close });

    // Inicializa o formulário
    this.form = this.fb.group({
      username: [''],
      collaboratorName: ['']
    });
  }

  /* ============================
     CICLO DE VIDA
  ============================ */

  ngOnInit() {
    this.initializePermissions();
  }

  /* ============================
     MÉTODOS PRIVADOS
  ============================ */

  // Copia as permissões recebidas para uso interno
  private initializePermissions(): void {
    this.permissions = this.modalOptions.permissions.map(permission => ({
      ...permission
    }));
  }

  /* ============================
     MÉTODOS PÚBLICOS
  ============================ */

  /**
   * Alterna o estado de uma permissão.
   * - access: ativa/desativa o acesso
   * - edit: ativa/desativa edição (independente do acesso)
   */
  togglePermission(permission: Permission, type: 'access' | 'edit'): void {
    if (type === 'access') {
      permission.access = !permission.access;
    } else if (type === 'edit') {
      permission.edit = !permission.edit;
    }
  }

  // Retorna apenas uma permissão selecionada e fecha o modal
  selectPermission(permission: Permission): void {
    this.modalCtrl.dismiss({
      success: true,
      selectedPermission: permission
    } as ModalResult);
  }

  // Envia todos os dados e fecha o modal
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

  // Cancela a ação e fecha a modal sem enviar dados
  cancel(): void {
    this.modalCtrl.dismiss({ success: false } as ModalResult);
  }

  // Fecha a modal (atalho visual, equivalente a cancelar)
  onClose(): void {
    this.modalCtrl.dismiss({ success: false } as ModalResult);
  }
}

