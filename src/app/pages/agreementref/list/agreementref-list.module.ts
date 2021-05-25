import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementrefListComponent } from './agreementref-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { AgreementrefAddModule } from '../add/agreementref-add.module';
import { AgreementrefCardModule } from '../card/agreementref-card.module';
import { AgreementrefListRoutingModule } from './agreementref-list-routing.module';

@NgModule({
  declarations: [AgreementrefListComponent],
  imports: [
    CommonModule, AgreementrefListRoutingModule, MatToolbarModule, ContainerModule, AgreementrefCardModule, MatButtonModule, MatIconModule, AgreementrefAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AgreementrefListComponent]
})
export class AgreementrefListModule { }
