import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactMedium } from 'src/app/shared/models/ContactMedium.model';

@Component({
  selector: 'app-contactmedium-update',
  templateUrl: './contactmedium-update.component.html',
  styleUrls: ['./contactmedium-update.component.scss']
})
export class ContactmediumUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    mediumType: new FormControl(this.data.mediumType),
    preferred: new FormControl(this.data.preferred),
    validFor: new FormControl(this.data.validFor),
    baseType: new FormControl(this.data.baseType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<ContactmediumUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ContactMedium) { }

  ngOnInit(): void {
  }

}
