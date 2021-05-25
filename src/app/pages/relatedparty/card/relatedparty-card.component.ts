import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { RelatedParty } from 'src/app/shared/models/RelatedParty.model';
import { RelatedpartyUpdateComponent } from '../update/relatedparty-update.component';

@Component({
  selector: 'app-relatedparty-card',
  templateUrl: './relatedparty-card.component.html',
  styleUrls: ['./relatedparty-card.component.scss']
})
export class RelatedpartyCardComponent implements OnInit {
  @Input() relatedparty?: RelatedParty;

  constructor(private service: FbBaseService<RelatedParty>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteRelatedparty(): void{
    this.service.delete("relatedparty",this.relatedparty?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RelatedpartyUpdateComponent, {
      data: this.relatedparty
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((relatedparty: RelatedParty) => {
      console.log(relatedparty);
      //if (customer?.name) {
        this.service.update('relatedparty',this.relatedparty?.id as string ,relatedparty).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
