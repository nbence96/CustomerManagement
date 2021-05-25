import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditProfile } from 'src/app/shared/models/CreditProfile.model';

@Component({
  selector: 'app-creditprofile-update',
  templateUrl: './creditprofile-update.component.html',
  styleUrls: ['./creditprofile-update.component.scss']
})
export class CreditprofileUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    creditProfileDate: new FormControl(this.data.creditProfileDate),
    creditRiskrating: new FormControl(this.data.creditRiskrating),
    creditScore: new FormControl(this.data.creditScore),
    validFor: new FormControl(this.data.validFor),
    baseType: new FormControl(this.data.baseType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<CreditprofileUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditProfile) { }

  ngOnInit(): void {
  }

}
