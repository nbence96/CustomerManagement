import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditprofileListComponent } from './creditprofile-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { CreditprofileAddModule } from '../add/creditprofile-add.module';
import { CreditprofileCardModule } from '../card/creditprofile-card.module';
import { CreditprofileListRoutingModule } from './creditprofile-list-routing.module';

@NgModule({
  declarations: [CreditprofileListComponent],
  imports: [
    CommonModule, CreditprofileListRoutingModule, MatToolbarModule, ContainerModule, CreditprofileCardModule, MatButtonModule, MatIconModule, CreditprofileAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [CreditprofileListComponent]
})
export class CreditprofileListModule { }
