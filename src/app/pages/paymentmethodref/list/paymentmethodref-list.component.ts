import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { PaymentMethodRef } from 'src/app/shared/models/PaymentMethodRef.model';
import { PaymentmethodrefAddComponent } from '../add/paymentmethodref-add.component';

@Component({
  selector: 'app-paymentmethodref-list',
  templateUrl: './paymentmethodref-list.component.html',
  styleUrls: ['./paymentmethodref-list.component.scss']
})
export class PaymentmethodrefListComponent implements OnInit {
  title = 'PaymentMethodRef';
  list$: Observable<PaymentMethodRef[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;
  
  constructor(private service: FbBaseService<PaymentMethodRef>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('paymentmethodref').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentmethodrefAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((paymentmethodref: PaymentMethodRef) => {
      console.log(paymentmethodref);
      //if (customer?.name) {
        this.service.add('paymentmethodref', paymentmethodref).then(id => { console.log(id); });
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
