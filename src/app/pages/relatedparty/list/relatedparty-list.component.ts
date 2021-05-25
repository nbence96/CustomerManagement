import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { startWith, debounceTime, map, catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { RelatedParty } from 'src/app/shared/models/RelatedParty.model';
import { RelatedpartyAddComponent } from '../add/relatedparty-add.component';

@Component({
  selector: 'app-relatedparty-list',
  templateUrl: './relatedparty-list.component.html',
  styleUrls: ['./relatedparty-list.component.scss']
})
export class RelatedpartyListComponent implements OnInit {
  title = 'RelatedParty';
  list$: Observable<RelatedParty[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;
  
  constructor(private service: FbBaseService<RelatedParty>, private dialog: MatDialog) { }

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
    this.list$ = this.service.get('relatedparty').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RelatedpartyAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((relatedparty: RelatedParty) => {
      console.log(relatedparty);
      //if (customer?.name) {
        this.service.add('relatedparty', relatedparty).then(id => { console.log(id); });
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
