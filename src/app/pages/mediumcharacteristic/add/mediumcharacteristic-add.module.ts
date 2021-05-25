import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumcharacteristicAddComponent } from './mediumcharacteristic-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MediumcharacteristicAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [MediumcharacteristicAddComponent],
  exports: [MediumcharacteristicAddComponent]
})
export class MediumcharacteristicAddModule { }
