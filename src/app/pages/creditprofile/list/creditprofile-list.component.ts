import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { CreditProfile } from 'src/app/shared/models/CreditProfile.model';
import { CreditprofileAddComponent } from '../add/creditprofile-add.component';

@Component({
  selector: 'app-creditprofile-list',
  templateUrl: './creditprofile-list.component.html',
  styleUrls: ['./creditprofile-list.component.scss']
})
export class CreditprofileListComponent implements OnInit {
  title = 'CreditProfile';
  list$: Observable<CreditProfile[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<CreditProfile>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.errorObject = null;
    this.list$ = this.service.get('creditprofile').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('creditprofile').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreditprofileAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((creditprofile: CreditProfile) => {
      console.log(creditprofile);
      //if (customer?.name) {
        this.service.add('creditprofile', creditprofile).then(id => { console.log(id); });
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
