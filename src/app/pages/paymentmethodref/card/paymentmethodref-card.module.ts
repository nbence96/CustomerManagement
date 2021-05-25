import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentmethodrefCardComponent } from './paymentmethodref-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { PaymentmethodrefUpdateModule } from '../update/paymentmethodref-update.module';

@NgModule({
  declarations: [PaymentmethodrefCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, PaymentmethodrefUpdateModule
  ],
  exports: [PaymentmethodrefCardComponent]
})
export class PaymentmethodrefCardModule { }
