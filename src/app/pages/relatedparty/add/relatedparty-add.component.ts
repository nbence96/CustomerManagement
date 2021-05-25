import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-relatedparty-add',
  templateUrl: './relatedparty-add.component.html',
  styleUrls: ['./relatedparty-add.component.scss']
})
export class RelatedpartyAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    name: new FormControl(''),
    role: new FormControl(''),
    baseType: new FormControl(''),
    referredType: new FormControl(''),
    schemaLocation: new FormControl(''),
    type: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<RelatedpartyAddComponent>) {}

  ngOnInit(): void {
  }

}
