import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { CreditProfile } from 'src/app/shared/models/CreditProfile.model';
import { CreditprofileUpdateComponent } from '../update/creditprofile-update.component';

@Component({
  selector: 'app-creditprofile-card',
  templateUrl: './creditprofile-card.component.html',
  styleUrls: ['./creditprofile-card.component.scss']
})
export class CreditprofileCardComponent implements OnInit {
  @Input() creditprofile?: CreditProfile;

  constructor(private service: FbBaseService<CreditProfile>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCreditprofile(): void{
    this.service.delete("creditprofile",this.creditprofile?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreditprofileUpdateComponent, {
      data: this.creditprofile
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((creditprofile: CreditProfile) => {
      console.log(creditprofile);
      //if (customer?.name) {
        this.service.update('creditprofile',this.creditprofile?.id as string ,creditprofile).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }

}
