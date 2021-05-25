import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountRef } from 'src/app/shared/models/AccountRef.model';
import { AccountrefUpdateComponent } from '../update/accountref-update.component';
import { FbBaseService } from './../../../services/fb-base.service';


@Component({
  selector: 'app-accountref-card',
  templateUrl: './accountref-card.component.html',
  styleUrls: ['./accountref-card.component.scss']
})
export class AccountrefCardComponent implements OnInit {
  @Input() accountref?: AccountRef;
  constructor(private service: FbBaseService<AccountRef>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteAccountRef(): void{
    this.service.delete("accountref",this.accountref?.id as string);
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(AccountrefUpdateComponent, {
      data: this.accountref
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((accountref: AccountRef) => {
      console.log(accountref);
      //if (customer?.name) {
        this.service.update('accountref',this.accountref?.id as string ,accountref).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
