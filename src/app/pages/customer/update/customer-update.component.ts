import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/shared/models/Customer.model';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {
	
  form: FormGroup = new FormGroup({
    href: new FormControl(this.data.href),
    name: new FormControl(this.data.name),
    status: new FormControl(this.data.status),
    statusReason: new FormControl(this.data.statusReason),
    validFor: new FormControl(this.data.validFor),
    baseType: new FormControl(this.data.baseType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<CustomerUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) { }

  ngOnInit(): void {
  }

}
