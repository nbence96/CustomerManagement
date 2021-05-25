import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgreementRef } from 'src/app/shared/models/AgreementRef.model';

@Component({
  selector: 'app-agreementref-update',
  templateUrl: './agreementref-update.component.html',
  styleUrls: ['./agreementref-update.component.scss']
})
export class AgreementrefUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    href: new FormControl(this.data.href),
    name: new FormControl(this.data.name),
    baseType: new FormControl(this.data.baseType),
    referredType: new FormControl(this.data.referredType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<AgreementrefUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgreementRef) { }

  ngOnInit(): void {
  }

}
