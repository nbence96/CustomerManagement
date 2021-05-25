import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { MediumCharacteristic } from 'src/app/shared/models/MediumCharacteristic.model';
import { MediumcharacteristicAddComponent } from '../add/mediumcharacteristic-add.component';

@Component({
  selector: 'app-mediumcharacteristic-list',
  templateUrl: './mediumcharacteristic-list.component.html',
  styleUrls: ['./mediumcharacteristic-list.component.scss']
})
export class MediumcharacteristicListComponent implements OnInit {
  title = 'MediumCharacteristics';
  list$: Observable<MediumCharacteristic[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;
  
  constructor(private service: FbBaseService<MediumCharacteristic>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        map(value => this._filter(value))
      );
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('mediumcharacteristic').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MediumcharacteristicAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((mediumcharacteristic: MediumCharacteristic) => {
      console.log(mediumcharacteristic);
      //if (customer?.name) {
        this.service.add('mediumcharacteristic', mediumcharacteristic).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
