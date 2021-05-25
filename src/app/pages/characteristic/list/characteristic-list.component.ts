import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Characteristic } from 'src/app/shared/models/Characteristic.model';
import { CharacteristicAddComponent } from '../add/characteristic-add.component';

@Component({
  selector: 'app-characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent implements OnInit {
  title = 'Characteristic';
  list$: Observable<Characteristic[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<Characteristic>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('characteristic').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CharacteristicAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((characteristic: Characteristic) => {
      console.log(characteristic);
      //if (customer?.name) {
        this.service.add('characteristic', characteristic).then(id => { console.log(id); });
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
