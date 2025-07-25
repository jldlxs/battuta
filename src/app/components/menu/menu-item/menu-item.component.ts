import { Component, Input } from '@angular/core';
import { IonItem, IonTitle, IonText } from '@ionic/angular/standalone';
import { MenuItem } from 'src/app/interfaces/menu-item';

/** Componente responsável por exibir um único item de menu. Ele recebe os dados do item e renderiza seu título e, opcionalmente, um indicador de que possui subitens. */
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [IonText, IonItem, IonTitle],
})
export class MenuItemComponent {
  /** Dados do item de menu a ser renderizado. @input */
  @Input({ required: true }) menuItem!: MenuItem;

  /** Determina se deve exibir indicador de subitens (submenu) @input */
  @Input({ required: true }) hasChildren!: boolean;
}
