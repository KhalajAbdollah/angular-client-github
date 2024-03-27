import {Component , Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider'
import { MenuComponent } from '../menu/menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardRepositoriesComponent } from '../card-repositories/card-repositories.component';
import { UserServiceService } from '../user-service.service';
import { CardProfileComponent } from '../card-profile/card-profile.component';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatDividerModule,MenuComponent,SidebarComponent,CardRepositoriesComponent ,CardProfileComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  providers :[UserServiceService]
})
export class TodoComponent {
  
}
