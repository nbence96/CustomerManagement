import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediumCharacteristic } from 'src/app/shared/models/MediumCharacteristic.model';

@Component({
  selector: 'app-mediumcharacteristic-update',
  templateUrl: './mediumcharacteristic-update.component.html',
  styleUrls: ['./mediumcharacteristic-update.component.scss']
})
export class MediumcharacteristicUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    city: new FormControl(this.data.city),
    contactType: new FormControl(this.data.contactType),
    country: new FormControl(this.data.country),
    emailAddress: new FormControl(this.data.emailAddress),
    faxNumber: new FormControl(this.data.faxNumber),
    phoneNumber: new FormControl(this.data.phoneNumber),
    postCode: new FormControl(this.data.postCode),
    socialNetworkId: new FormControl(this.data.socialNetworkId),
    stateOrProvince: new FormControl(this.data.stateOrProvince),
    street1: new FormControl(this.data.street1),
    street2: new FormControl(this.data.street2),
    baseType: new FormControl(this.data.baseType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<MediumcharacteristicUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MediumCharacteristic) { }

  ngOnInit(): void {
  }

}
