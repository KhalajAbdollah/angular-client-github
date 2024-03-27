import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepositoriesComponent } from './card-repositories.component';

describe('CardRepositoriesComponent', () => {
  let component: CardRepositoriesComponent;
  let fixture: ComponentFixture<CardRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRepositoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
