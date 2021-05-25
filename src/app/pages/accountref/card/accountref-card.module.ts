import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountrefCardComponent } from './accountref-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { AccountrefUpdateModule } from '../update/accountref-update.module';



@NgModule({
  declarations: [
    AccountrefCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, AccountrefUpdateModule
  ],
  exports: [AccountrefCardComponent]
})
export class AccountrefCardModule { }
