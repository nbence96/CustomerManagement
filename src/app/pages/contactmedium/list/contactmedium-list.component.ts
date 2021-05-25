import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ContactMedium } from 'src/app/shared/models/ContactMedium.model';
import { ContactmediumAddComponent } from '../add/contactmedium-add.component';

@Component({
  selector: 'app-contactmedium-list',
  templateUrl: './contactmedium-list.component.html',
  styleUrls: ['./contactmedium-list.component.scss']
})
export class ContactmediumListComponent implements OnInit {
  
  title = 'ContactMedium';
  list$: Observable<ContactMedium[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<ContactMedium>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('contactmedium').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactmediumAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((contactmedium: ContactMedium) => {
      console.log(contactmedium);
      //if (customer?.name) {
        this.service.add('contactmedium', contactmedium).then(id => { console.log(id); });
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
