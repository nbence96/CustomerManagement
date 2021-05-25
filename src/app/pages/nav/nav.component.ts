import { Component } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
