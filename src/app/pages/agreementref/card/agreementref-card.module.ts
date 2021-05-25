import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementrefCardComponent } from './agreementref-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { AgreementrefUpdateModule } from '../update/agreementref-update.module';

@NgModule({
  declarations: [AgreementrefCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, AgreementrefUpdateModule
  ],
  exports: [AgreementrefCardComponent]
})
export class AgreementrefCardModule { }
