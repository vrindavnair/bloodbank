import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactasComponent } from './contactas.component';

describe('ContactasComponent', () => {
  let component: ContactasComponent;
  let fixture: ComponentFixture<ContactasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactasComponent]
    });
    fixture = TestBed.createComponent(ContactasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
