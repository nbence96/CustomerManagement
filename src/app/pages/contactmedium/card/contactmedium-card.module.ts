import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmediumCardComponent } from './contactmedium-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { ContactmediumUpdateModule } from '../update/contactmedium-update.module';

@NgModule({
  declarations: [ContactmediumCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, ContactmediumUpdateModule
  ],
  exports: [ContactmediumCardComponent]
})
export class ContactmediumCardModule { }
