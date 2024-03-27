import { Component ,Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardRepositoriesComponent } from '../card-repositories/card-repositories.component';
@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CardRepositoriesComponent],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.scss'
})
export class CardProfileComponent {
  longText = `UserName`;
}
