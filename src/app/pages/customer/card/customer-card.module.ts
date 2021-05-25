import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { CustomerCardComponent } from './customer-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CustomerUpdateModule } from '../update/customer-update.module';

@NgModule({
  declarations: [CustomerCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, CustomerUpdateModule
  ],
  exports: [CustomerCardComponent]
})
export class CustomerCardModule { }
