import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { AgreementRef } from 'src/app/shared/models/AgreementRef.model';
import { AgreementrefUpdateComponent } from '../update/agreementref-update.component';

@Component({
  selector: 'app-agreementref-card',
  templateUrl: './agreementref-card.component.html',
  styleUrls: ['./agreementref-card.component.scss']
})
export class AgreementrefCardComponent implements OnInit {
  @Input() agreementref?: AgreementRef;

  constructor(private service: FbBaseService<AgreementRef>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteAgreementref(): void {
    this.service.delete("agreementref",this.agreementref?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgreementrefUpdateComponent, {
      data: this.agreementref
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((agreementref: AgreementRef) => {
      console.log(agreementref);
      //if (customer?.name) {
        this.service.update('agreementref',this.agreementref?.id as string ,agreementref).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
