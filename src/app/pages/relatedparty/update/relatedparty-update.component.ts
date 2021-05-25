import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RelatedParty } from 'src/app/shared/models/RelatedParty.model';

@Component({
  selector: 'app-relatedparty-update',
  templateUrl: './relatedparty-update.component.html',
  styleUrls: ['./relatedparty-update.component.scss']
})
export class RelatedpartyUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    href: new FormControl(this.data.href),
    name: new FormControl(this.data.name),
    role: new FormControl(this.data.role),
    baseType: new FormControl(this.data.baseType),
    referredType: new FormControl(this.data.referredType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<RelatedpartyUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RelatedParty) { }

  ngOnInit(): void {
  }

}
