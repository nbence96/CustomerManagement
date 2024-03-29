import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmediumAddComponent } from './contactmedium-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [ContactmediumAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  entryComponents: [ContactmediumAddComponent],
  exports: [ContactmediumAddComponent]
})
export class ContactmediumAddModule { }
