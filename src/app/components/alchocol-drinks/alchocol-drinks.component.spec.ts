import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchocolDrinksComponent } from './alchocol-drinks.component';

describe('AlchocolDrinksComponent', () => {
  let component: AlchocolDrinksComponent;
  let fixture: ComponentFixture<AlchocolDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlchocolDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlchocolDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
