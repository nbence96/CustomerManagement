import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditprofileCardComponent } from './creditprofile-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { CreditprofileUpdateModule } from '../update/creditprofile-update.module';

@NgModule({
  declarations: [CreditprofileCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, CreditprofileUpdateModule
  ],
  exports: [CreditprofileCardComponent]
})
export class CreditprofileCardModule { }
