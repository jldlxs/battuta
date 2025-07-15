import { Component, Input } from '@angular/core';
import { IonItem, IonTitle, IonNote, IonText } from '@ionic/angular/standalone';
import { MenuItem } from 'src/app/types/menu-item';

/**
 * @class MenuItemComponent
 * @description Componente responsável por exibir um único item de menu.
 * Ele recebe os dados do item e renderiza seu título e, opcionalmente, um
 * indicador de que possui sub-itens.
 */
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [IonText, IonItem, IonTitle, IonNote],
})
export class MenuItemComponent {
  /**
   * @property {MenuItem} menuItem
   * @description O objeto contendo os dados do item de menu a ser exibido.
   */
  @Input({ required: true }) menuItem!: MenuItem;

  /**
   * @property {boolean} hasChildren
   * @description Um booleano que indica se o item de menu possui itens filhos (submenus).
   * Usado para exibir o ícone de seta.
   */
  @Input({ required: true }) hasChildren!: boolean;
}
