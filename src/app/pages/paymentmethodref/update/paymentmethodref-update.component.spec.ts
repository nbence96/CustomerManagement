import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmethodrefUpdateComponent } from './paymentmethodref-update.component';

describe('PaymentmethodrefUpdateComponent', () => {
  let component: PaymentmethodrefUpdateComponent;
  let fixture: ComponentFixture<PaymentmethodrefUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmethodrefUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodrefUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
