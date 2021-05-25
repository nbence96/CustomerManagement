import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agreementref-add',
  templateUrl: './agreementref-add.component.html',
  styleUrls: ['./agreementref-add.component.scss']
})
export class AgreementrefAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    name: new FormControl(''),
    baseType: new FormControl(''),
    referredType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });
  
  constructor(public dialogRef: MatDialogRef<AgreementrefAddComponent>) { }

  ngOnInit(): void {
  }

}
