import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountrefUpdateComponent } from './accountref-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule ,MatLabel} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AccountrefUpdateComponent
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
  entryComponents: [AccountrefUpdateComponent],
  exports: [AccountrefUpdateComponent]
})
export class AccountrefUpdateModule { }
