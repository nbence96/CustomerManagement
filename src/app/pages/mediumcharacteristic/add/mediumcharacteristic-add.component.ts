import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mediumcharacteristic-add',
  templateUrl: './mediumcharacteristic-add.component.html',
  styleUrls: ['./mediumcharacteristic-add.component.scss']
})
export class MediumcharacteristicAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    city: new FormControl(''),
    contactType: new FormControl(''),
    country: new FormControl(''),
    emailAddress: new FormControl('',Validators.email),
    faxNumber: new FormControl(''),
    phoneNumber: new FormControl(''),
    postCode: new FormControl(''),
    socialNetworkId: new FormControl(''),
    stateOrProvince: new FormControl(''),
    street1: new FormControl(''),
    street2: new FormControl(''),
    baseType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });

  matcher = new MyErrorStateMatcher();
  
  constructor(public dialogRef: MatDialogRef<MediumcharacteristicAddComponent>) {}

  ngOnInit(): void {
  }

}
