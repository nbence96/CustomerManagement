import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { AccountRef } from 'src/app/shared/models/AccountRef.model';
import { AccountrefAddComponent } from '../add/accountref-add.component';

@Component({
  selector: 'app-accountref-list',
  templateUrl: './accountref-list.component.html',
  styleUrls: ['./accountref-list.component.scss']
})
export class AccountrefListComponent implements OnInit {
  title = 'Accountref';
  list$: Observable<AccountRef[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;
  
  constructor(private service: FbBaseService<AccountRef>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('accountref').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountrefAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((accountRef: AccountRef) => {
      console.log(accountRef);
      //if (customer?.name) {
        this.service.add('accountref', accountRef).then(id => { console.log(id); });
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
