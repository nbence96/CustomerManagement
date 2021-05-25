import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentMethodRef } from 'src/app/shared/models/PaymentMethodRef.model';

@Component({
  selector: 'app-paymentmethodref-update',
  templateUrl: './paymentmethodref-update.component.html',
  styleUrls: ['./paymentmethodref-update.component.scss']
})
export class PaymentmethodrefUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    href: new FormControl(this.data.href),
    name: new FormControl(this.data.name),
    baseType: new FormControl(this.data.baseType),
    referredType: new FormControl(this.data.referredType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<PaymentmethodrefUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentMethodRef) { }

  ngOnInit(): void {
  }

}
