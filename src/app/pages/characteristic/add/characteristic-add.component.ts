import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-characteristic-add',
  templateUrl: './characteristic-add.component.html',
  styleUrls: ['./characteristic-add.component.scss']
})
export class CharacteristicAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    value: new FormControl(''),
    valueType: new FormControl(''),
    baseType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CharacteristicAddComponent>) { }

  ngOnInit(): void {
  }

}
