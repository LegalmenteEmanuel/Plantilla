import { Component } from '@angular/core';
import { MENU_CONFIG, MenuItem } from './menu-config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  menuItems: MenuItem[] = MENU_CONFIG;
}
