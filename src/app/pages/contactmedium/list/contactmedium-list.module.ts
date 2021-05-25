import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmediumListComponent } from './contactmedium-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { ContactmediumAddModule } from '../add/contactmedium-add.module';
import { ContactmediumCardModule } from '../card/contactmedium-card.module';
import { ContactmediumListRoutingModule } from './contactmedium-list-routing.module';

@NgModule({
  declarations: [ContactmediumListComponent],
  imports: [
    CommonModule, ContactmediumListRoutingModule, MatToolbarModule, ContainerModule, ContactmediumCardModule, MatButtonModule, MatIconModule, ContactmediumAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [ContactmediumListComponent]
})
export class ContactmediumListModule { }
