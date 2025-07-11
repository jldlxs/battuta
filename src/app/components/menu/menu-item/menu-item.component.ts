import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItem, IonTitle, IonNote } from '@ionic/angular/standalone';
import { MenuItem } from 'src/app/types/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: true,
  imports: [IonItem, IonTitle, IonNote],
})
export class MenuItemComponent implements OnInit {
  /**  */
  @Input() menuItem!: MenuItem;

  /** */
  @Input() hasChildren!: boolean;

  ngOnInit() {}
}
