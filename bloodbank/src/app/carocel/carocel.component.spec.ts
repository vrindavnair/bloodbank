import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarocelComponent } from './carocel.component';

describe('CarocelComponent', () => {
  let component: CarocelComponent;
  let fixture: ComponentFixture<CarocelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarocelComponent]
    });
    fixture = TestBed.createComponent(CarocelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
