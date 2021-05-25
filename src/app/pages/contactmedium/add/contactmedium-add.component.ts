import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, PatternValidator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contactmedium-add',
  templateUrl: './contactmedium-add.component.html',
  styleUrls: ['./contactmedium-add.component.scss']
})
export class ContactmediumAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    mediumType: new FormControl(''),
    preferred: new FormControl(''),
    validFor: new FormControl(''),
    baseType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });
  
  constructor(public dialogRef: MatDialogRef<ContactmediumAddComponent>) { }

  ngOnInit(): void {
  }

}
