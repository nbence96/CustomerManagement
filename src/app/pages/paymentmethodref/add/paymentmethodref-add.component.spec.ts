import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmethodrefAddComponent } from './paymentmethodref-add.component';

describe('PaymentmethodrefAddComponent', () => {
  let component: PaymentmethodrefAddComponent;
  let fixture: ComponentFixture<PaymentmethodrefAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmethodrefAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodrefAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
