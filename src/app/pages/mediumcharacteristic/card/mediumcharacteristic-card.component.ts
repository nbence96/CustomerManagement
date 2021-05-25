import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MediumCharacteristic } from 'src/app/shared/models/MediumCharacteristic.model';
import { MediumcharacteristicUpdateComponent } from '../update/mediumcharacteristic-update.component';

@Component({
  selector: 'app-mediumcharacteristic-card',
  templateUrl: './mediumcharacteristic-card.component.html',
  styleUrls: ['./mediumcharacteristic-card.component.scss']
})
export class MediumcharacteristicCardComponent implements OnInit {
  @Input() mediumcharacteristic?: MediumCharacteristic;

  constructor(private service: FbBaseService<MediumCharacteristic>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteMediumcharacteristic(): void{
    this.service.delete("mediumcharacteristic",this.mediumcharacteristic?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MediumcharacteristicUpdateComponent, {
      data: this.mediumcharacteristic
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((mediumcharacteristic: MediumCharacteristic) => {
      console.log(mediumcharacteristic);
      //if (customer?.name) {
        this.service.update('mediumcharacteristic',this.mediumcharacteristic?.id as string ,mediumcharacteristic).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
