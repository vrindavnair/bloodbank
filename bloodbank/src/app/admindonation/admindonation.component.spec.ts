import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindonationComponent } from './admindonation.component';

describe('AdmindonationComponent', () => {
  let component: AdmindonationComponent;
  let fixture: ComponentFixture<AdmindonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindonationComponent]
    });
    fixture = TestBed.createComponent(AdmindonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
