import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmethodrefCardComponent } from './paymentmethodref-card.component';

describe('PaymentmethodrefCardComponent', () => {
  let component: PaymentmethodrefCardComponent;
  let fixture: ComponentFixture<PaymentmethodrefCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmethodrefCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodrefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
