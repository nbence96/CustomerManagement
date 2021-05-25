import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditprofileAddComponent } from './creditprofile-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CreditprofileAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [CreditprofileAddComponent],
  exports: [CreditprofileAddComponent]
})
export class CreditprofileAddModule { }
