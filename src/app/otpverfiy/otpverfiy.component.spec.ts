import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpverfiyComponent } from './otpverfiy.component';

describe('OtpverfiyComponent', () => {
  let component: OtpverfiyComponent;
  let fixture: ComponentFixture<OtpverfiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpverfiyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpverfiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
