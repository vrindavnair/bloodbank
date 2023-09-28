import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientbldreqComponent } from './patientbldreq.component';

describe('PatientbldreqComponent', () => {
  let component: PatientbldreqComponent;
  let fixture: ComponentFixture<PatientbldreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientbldreqComponent]
    });
    fixture = TestBed.createComponent(PatientbldreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
