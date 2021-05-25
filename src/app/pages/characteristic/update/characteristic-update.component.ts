import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Characteristic } from 'src/app/shared/models/Characteristic.model';

@Component({
  selector: 'app-characteristic-update',
  templateUrl: './characteristic-update.component.html',
  styleUrls: ['./characteristic-update.component.scss']
})
export class CharacteristicUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    name: new FormControl(this.data.name),
    value: new FormControl(this.data.value),
    valueType: new FormControl(this.data.valueType),
    baseType: new FormControl(this.data.baseType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });

  constructor(public dialogRef: MatDialogRef<CharacteristicUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Characteristic) { }

  ngOnInit(): void {
  }

}
