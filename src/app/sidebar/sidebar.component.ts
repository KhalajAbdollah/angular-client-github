
import {Component, ElementRef, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenav,MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatToolbarModule,MatSidenavModule , MatButtonModule, MatIconModule,MatDividerModule,MenuComponent,MatSidenav],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarWidth: number = 0;
  sidebarLeft: number = 0;

  openSidebar() {
    this.sidebarWidth = 250;
    this.sidebarLeft = 0;
  }

  closeSidebar() {
    this.sidebarWidth = 0;
    this.sidebarLeft = -250;
  }
}
