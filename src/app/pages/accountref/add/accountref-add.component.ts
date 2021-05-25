import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-accountref-add',
  templateUrl: './accountref-add.component.html',
  styleUrls: ['./accountref-add.component.scss']
})
export class AccountrefAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    href: new FormControl(''),
    name: new FormControl(''),
    baseType: new FormControl(''),
    referredType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });
  
  constructor(public dialogRef: MatDialogRef<AccountrefAddComponent>) { }

  ngOnInit(): void {
  }

}
