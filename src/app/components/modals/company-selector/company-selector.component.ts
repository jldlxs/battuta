import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonButton, IonTitle, IonContent, ModalController, IonSearchbar, IonList, IonRadioGroup, IonRadio, IonText, IonToolbar } from "@ionic/angular/standalone";
import { Company } from 'src/app/interfaces/tmp.company';

/** Componente Modal usado para selecionar a Empresa que o Usuário deseja usar/entrar. */
@Component({
  selector: 'app-company-selector',
  templateUrl: './company-selector.component.html',
  styleUrls: ['./company-selector.component.scss'],
  imports: [IonToolbar, IonText, IonRadio, IonRadioGroup, IonList, IonSearchbar, CommonModule, IonContent, IonTitle, IonButton, IonHeader, FormsModule]
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

  /** Indica se o resultado da busca por empresas foi bem-sucedido */
  searchValid = true;

  /**
   * Filtra empresas por nome ou CNPJ conforme digitação do usuário.
   * @param {Event} event Evento de input da searchbar
   */
  onHandleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const query = target.value.toLowerCase().trim();

    if (!query) {
      this.resultsCompany = this.companies;
      this.searchValid = true;
      return;
    }

    this.resultsCompany = this.companies.filter((company) => {
      const name = company.name.toLowerCase();
      const cnpj = company.cnpj;
      return name.includes(query) || cnpj.includes(query);
    });

    this.searchValid = this.resultsCompany.length > 0;
  }

  /** Fecha o modal atual descartando quaisquer dados. */
  onClose(): void {
    this.modalCtrl.dismiss(null, CompanySelectorDismiss.close);
  }

  /** Fecha o modal de seleção de empresa e retorna a empresa selecionada. */
  onSelected(): void {
    this.modalCtrl.dismiss(this.currentCompany, CompanySelectorDismiss.access);
  }

  constructor() { }

  /** 
   * Define dinamicamente a altura do modal.
   * Quando `searchValid` é verdadeiro (válido), a altura será 252px.
   * Quando for falso (inválido), será 140px.
   */
  @HostBinding('style.height.px')
  get height(): number {
    return this.searchValid ? 252 : 140;
  }


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