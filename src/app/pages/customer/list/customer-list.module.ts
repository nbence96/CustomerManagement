import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CustomerAddModule } from './../add/customer-add.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomerCardModule } from './../card/customer-card.module';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { CustomerListRoutingModule } from './customer-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule, CustomerListRoutingModule, MatToolbarModule, ContainerModule, CustomerCardModule, MatButtonModule, MatIconModule, CustomerAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [CustomerListComponent]
})
export class CustomerListModule { }
