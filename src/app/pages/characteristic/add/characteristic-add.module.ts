import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicAddComponent } from './characteristic-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CharacteristicAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [CharacteristicAddComponent],
  exports: [CharacteristicAddComponent]
})
export class CharacteristicAddModule { }
