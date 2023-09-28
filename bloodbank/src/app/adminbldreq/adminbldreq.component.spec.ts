import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbldreqComponent } from './adminbldreq.component';

describe('AdminbldreqComponent', () => {
  let component: AdminbldreqComponent;
  let fixture: ComponentFixture<AdminbldreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminbldreqComponent]
    });
    fixture = TestBed.createComponent(AdminbldreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
