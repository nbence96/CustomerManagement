import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountRef } from 'src/app/shared/models/AccountRef.model';

@Component({
  selector: 'app-accountref-update',
  templateUrl: './accountref-update.component.html',
  styleUrls: ['./accountref-update.component.scss']
})
export class AccountrefUpdateComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    description: new FormControl(this.data.description),
    href: new FormControl(this.data.href),
    name: new FormControl(this.data.name),
    baseType: new FormControl(this.data.baseType),
    referredType: new FormControl(this.data.referredType),
    schemaLocation: new FormControl(this.data.schemaLocation),
    type: new FormControl(this.data.type)
  });
  
  constructor(public dialogRef: MatDialogRef<AccountrefUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AccountRef) { }

  ngOnInit(): void {
  }

}
