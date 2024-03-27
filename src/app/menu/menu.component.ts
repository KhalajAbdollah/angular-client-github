import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }
  closeMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
      menu.classList.add('hidden');
    }
  }
  isHovered: boolean = false;



  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
