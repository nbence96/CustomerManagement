import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentmethodrefListComponent } from './paymentmethodref-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { PaymentmethodrefAddModule } from '../add/paymentmethodref-add.module';
import { PaymentmethodrefCardModule } from '../card/paymentmethodref-card.module';
import { PaymentmethodrefListRoutingModule } from './paymentmethodref-list-routing.module';

@NgModule({
  declarations: [PaymentmethodrefListComponent],
  imports: [
    CommonModule, PaymentmethodrefListRoutingModule, MatToolbarModule, ContainerModule, PaymentmethodrefCardModule, MatButtonModule, MatIconModule, PaymentmethodrefAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [PaymentmethodrefListComponent]
})
export class PaymentmethodrefListModule { }
