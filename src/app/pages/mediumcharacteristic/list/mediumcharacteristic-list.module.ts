import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumcharacteristicListComponent } from './mediumcharacteristic-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MediumcharacteristicAddModule } from '../add/mediumcharacteristic-add.module';
import { MediumcharacteristicCardModule } from '../card/mediumcharacteristic-card.module';
import { MediumcharacteristicListRoutingModule } from './mediumcharacteristic-list-routing.module';

@NgModule({
  declarations: [MediumcharacteristicListComponent],
  imports: [
    CommonModule, MediumcharacteristicListRoutingModule, MatToolbarModule, ContainerModule, MediumcharacteristicCardModule, MatButtonModule, MatIconModule, MediumcharacteristicAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [MediumcharacteristicListComponent]
})
export class MediumcharacteristicListModule { }
