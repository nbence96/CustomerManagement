import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacteristicListComponent } from './characteristic-list.component';
import { CharacteristicListRoutingModule } from './characteristic-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { CharacteristicAddModule } from '../add/characteristic-add.module';
import { CharacteristicCardModule } from '../card/characteristic-card.module';

@NgModule({
  declarations: [CharacteristicListComponent],
  imports: [
    CommonModule, CharacteristicListRoutingModule, MatToolbarModule, ContainerModule, CharacteristicCardModule, MatButtonModule, MatIconModule, CharacteristicAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [CharacteristicListComponent]
})
export class CharacteristicListModule { }
