import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-creditprofile-add',
  templateUrl: './creditprofile-add.component.html',
  styleUrls: ['./creditprofile-add.component.scss']
})
export class CreditprofileAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    creditProfileDate: new FormControl(''),
    creditRiskrating: new FormControl(''),
    creditScore: new FormControl(''),
    validFor: new FormControl(''),
    baseType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CreditprofileAddComponent>) { }

  ngOnInit(): void {
  }

}
