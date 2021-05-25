import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedpartyCardComponent } from './relatedparty-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { RelatedpartyUpdateModule } from '../update/relatedparty-update.module';

@NgModule({
  declarations: [RelatedpartyCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, RelatedpartyUpdateModule
  ],
  exports: [RelatedpartyCardComponent]
})
export class RelatedpartyCardModule { }
