import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountrefListComponent } from './accountref-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { AccountrefAddModule } from '../add/accountref-add.module';
import { AccountrefCardModule } from '../card/accountref-card.module';
import { AccountrefListRoutingModule } from './accountref-list-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AccountrefListComponent],
  imports: [
    CommonModule, AccountrefListRoutingModule, MatToolbarModule, ContainerModule, AccountrefCardModule, MatButtonModule, MatIconModule, AccountrefAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ]
})
export class AccountrefListModule { }
