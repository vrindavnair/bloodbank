import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstkreqComponent } from './adminstkreq.component';

describe('AdminstkreqComponent', () => {
  let component: AdminstkreqComponent;
  let fixture: ComponentFixture<AdminstkreqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminstkreqComponent]
    });
    fixture = TestBed.createComponent(AdminstkreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
