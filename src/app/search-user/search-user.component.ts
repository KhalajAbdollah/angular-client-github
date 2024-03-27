import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { CardRepositoriesComponent } from '../card-repositories/card-repositories.component';
@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule,CardRepositoriesComponent],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss',
  providers :[UserServiceService]
})
export class SearchUserComponent {
  repositories: any[] = [];
  username: string = "";

  @Output() searchEvent = new EventEmitter<string>();

  search() {
    if (this.username.trim() === "") {
      alert("GitHub Username is required.");
    } else {
      this.searchEvent.emit(this.username);
    }
  }
}
