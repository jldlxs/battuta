import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonButton, IonTitle, IonContent, IonItem, ModalController, IonSearchbar, IonList, IonRadioGroup, IonRadio, IonText } from "@ionic/angular/standalone";
import { Company } from 'src/app/interfaces/company';

/** Componente Modal usado para selecionar a Empresa que o Usuário deseja usar/entrar. */
@Component({
  selector: 'app-company-selector',
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.scss'],
  imports: [IonText, IonRadio, IonRadioGroup, IonList, IonSearchbar, CommonModule, IonItem, IonContent, IonTitle, IonButton, IonHeader, FormsModule]
})
export class CompanySelectorComponent implements OnInit {
  /** Controlador para a criação e gerenciamento de janelas modais do Ionic. */
  private modalCtrl: ModalController = inject(ModalController)

  /** Lista completa de empresas disponíveis para seleção. @input */
  @Input() companies: Company[] = [];

  /** Empresa pré-selecionada ao abrir o modal. @input */
  @Input() selectedCompany: Company;

  /** Empresa selecionada durante a interação com o modal */
  currentCompany: Company;

  /** Lista filtrada de Empresas baseada na pesquisa do Usuário */
  resultsCompany: Company[] = [];

  /**
   * Filtra empresas por nome ou CNPJ conforme digitação do usuário.
   * @param {Event} event Evento de input da searchbar
   */
  onHandleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value.toLowerCase();

    this.resultsCompany = this.companies.filter((company) => {
      const name = company.name.toLowerCase();
      const cnpj = company.cnpj;
      return name.includes(query) || cnpj.includes(query);
    });
  }

  /** Fecha o modal atual descartando quaisquer dados e emitindo o evento 'close'. */
  onClose(): void {
    this.modalCtrl.dismiss(null, CompanySelectorDismiss.close);
  }

  /** Fecha o modal de seleção de empresa e retorna a empresa selecionada emitindo o evento 'access'. */
  onSelected(): void {
    this.modalCtrl.dismiss(this.currentCompany, CompanySelectorDismiss.access);
  }

  constructor() { }

  ngOnInit() {
    this.currentCompany = this.selectedCompany;
    this.resultsCompany = [...this.companies];
  }
}

/**
 * Enum que representa os possíveis motivos de fechamento do modal de seleção de empresa.
 * 
 * - `access`: O usuário selecionou uma empresa e confirmou a escolha.
 * - `close`: O usuário fechou o modal sem selecionar uma empresa.
 */
export enum CompanySelectorDismiss { access = 'access', close = 'close' }