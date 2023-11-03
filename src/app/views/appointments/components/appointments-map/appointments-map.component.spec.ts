import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsMapComponent } from './appointments-map.component';

describe('AppointmentsMapComponent', () => {
  let component: AppointmentsMapComponent;
  let fixture: ComponentFixture<AppointmentsMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsMapComponent]
    });
    fixture = TestBed.createComponent(AppointmentsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
