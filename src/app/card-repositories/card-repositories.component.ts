import { Component,Output, EventEmitter, InjectionToken  } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';
import {SearchUserComponent} from  '../search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from '../todo/todo.component';
import { CardProfileComponent } from '../card-profile/card-profile.component';
export const USER_SERVICE_TOKEN = new InjectionToken<UserServiceService>('UserServiceService');
@Component({
  selector: 'app-card-repositories',
  standalone: true,
  imports: [MatCardModule, MatButtonModule , CommonModule, SearchUserComponent, FormsModule ,HttpClientModule , TodoComponent , CardProfileComponent],
  templateUrl: './card-repositories.component.html',
  styleUrl: './card-repositories.component.scss',
  providers :[UserServiceService]
})
export class CardRepositoriesComponent {
  repositories: any[] = [];
  username: string = '';
  constructor(private userService: UserServiceService) { }

  getRepositories() {
    if (this.username.trim() === "") {
      alert("Please enter a username.");
      return;
    }

    this.userService.getRepositories(this.username).subscribe({
      next: (data: any) => {
        this.repositories = data;
      },
      error: (error: any) => {
        console.error("Error fetching repositories:", error);
      }
    });
  }

  
}

