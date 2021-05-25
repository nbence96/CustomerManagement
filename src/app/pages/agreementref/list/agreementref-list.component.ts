import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { AgreementRef } from 'src/app/shared/models/AgreementRef.model';
import { AgreementrefAddComponent } from '../add/agreementref-add.component';

@Component({
  selector: 'app-agreementref-list',
  templateUrl: './agreementref-list.component.html',
  styleUrls: ['./agreementref-list.component.scss']
})
export class AgreementrefListComponent implements OnInit {
  title = 'AgreementRef';
  list$: Observable<AgreementRef[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<AgreementRef>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('agreementref').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgreementrefAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((agreementref: AgreementRef) => {
      console.log(agreementref);
      //if (customer?.name) {
        this.service.add('agreementref', agreementref).then(id => { console.log(id); });
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
