import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAlcoholicDrinksComponent } from './non-alcoholic-drinks.component';

describe('NonAlcoholicDrinksComponent', () => {
  let component: NonAlcoholicDrinksComponent;
  let fixture: ComponentFixture<NonAlcoholicDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonAlcoholicDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAlcoholicDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
