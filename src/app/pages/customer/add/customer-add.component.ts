import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
    statusReason: new FormControl(''),
    validFor: new FormControl(''),
    baseType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CustomerAddComponent>) {}

  ngOnInit(): void {
  }

}
