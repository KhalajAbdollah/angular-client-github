import { Component, EventEmitter, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardRepositoriesComponent } from './card-repositories/card-repositories.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoComponent,FormsModule,CardProfileComponent,CardRepositoriesComponent, SearchUserComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
