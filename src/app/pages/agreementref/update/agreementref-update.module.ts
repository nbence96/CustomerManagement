import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementrefUpdateComponent } from './agreementref-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AgreementrefUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  entryComponents: [AgreementrefUpdateComponent],
  exports: [AgreementrefUpdateComponent],
})
export class AgreementrefUpdateModule { }
