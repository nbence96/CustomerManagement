import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumcharacteristicCardComponent } from './mediumcharacteristic-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { MediumcharacteristicUpdateModule } from '../update/mediumcharacteristic-update.module';

@NgModule({
  declarations: [MediumcharacteristicCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, MediumcharacteristicUpdateModule
  ],
  exports: [MediumcharacteristicCardComponent]
})
export class MediumcharacteristicCardModule { }
