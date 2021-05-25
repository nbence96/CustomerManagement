import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatedpartyListComponent } from './relatedparty-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { RelatedpartyAddModule } from '../add/relatedparty-add.module';
import { RelatedpartyCardModule } from '../card/relatedparty-card.module';
import { RelatedpartyListRoutingModule } from './relatedparty-list-routing.module';

@NgModule({
  declarations: [RelatedpartyListComponent],
  imports: [
    CommonModule, RelatedpartyListRoutingModule, MatToolbarModule, ContainerModule, RelatedpartyCardModule, MatButtonModule, MatIconModule, RelatedpartyAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [RelatedpartyListComponent]
})
export class RelatedpartyListModule { }
