import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerUpdateComponent } from './customer-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CustomerUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  entryComponents: [CustomerUpdateComponent],
  exports: [CustomerUpdateComponent]
})
export class CustomerUpdateModule { }
