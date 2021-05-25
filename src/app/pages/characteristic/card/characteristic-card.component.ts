import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Characteristic } from 'src/app/shared/models/Characteristic.model';
import { CharacteristicUpdateComponent } from '../update/characteristic-update.component';

@Component({
  selector: 'app-characteristic-card',
  templateUrl: './characteristic-card.component.html',
  styleUrls: ['./characteristic-card.component.scss']
})
export class CharacteristicCardComponent implements OnInit {
  @Input() characteristic?: Characteristic;

  constructor(private service: FbBaseService<Characteristic>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCharacteristic(): void{
    this.service.delete("characteristic",this.characteristic?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CharacteristicUpdateComponent, {
      data: this.characteristic
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((characteristic: Characteristic) => {
      console.log(characteristic);
      //if (customer?.name) {
        this.service.update('characteristic',this.characteristic?.id as string ,characteristic).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
