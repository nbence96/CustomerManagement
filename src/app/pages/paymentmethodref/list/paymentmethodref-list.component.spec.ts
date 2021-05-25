import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmethodrefListComponent } from './paymentmethodref-list.component';

describe('PaymentmethodrefListComponent', () => {
  let component: PaymentmethodrefListComponent;
  let fixture: ComponentFixture<PaymentmethodrefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmethodrefListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodrefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
