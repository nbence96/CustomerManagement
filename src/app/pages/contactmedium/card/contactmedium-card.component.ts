import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ContactMedium } from 'src/app/shared/models/ContactMedium.model';
import { ContactmediumUpdateComponent } from '../update/contactmedium-update.component';

@Component({
  selector: 'app-contactmedium-card',
  templateUrl: './contactmedium-card.component.html',
  styleUrls: ['./contactmedium-card.component.scss']
})
export class ContactmediumCardComponent implements OnInit {
  @Input() contactmedium?: ContactMedium;
  
  constructor(private service: FbBaseService<ContactMedium>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteContactmedium(): void{
    this.service.delete("contactmedium",this.contactmedium?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactmediumUpdateComponent, {
      data: this.contactmedium
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((contactmedium: ContactMedium) => {
      console.log(contactmedium);
      //if (customer?.name) {
        this.service.update('contactmedium',this.contactmedium?.id as string ,contactmedium).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
