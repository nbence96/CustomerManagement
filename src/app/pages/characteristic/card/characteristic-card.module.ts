import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicCardComponent } from './characteristic-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { CharacteristicUpdateModule } from '../update/characteristic-update.module';

@NgModule({
  declarations: [CharacteristicCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, CharacteristicUpdateModule
  ],
  exports: [CharacteristicCardComponent]
})
export class CharacteristicCardModule { }
