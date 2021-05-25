import { Customer } from 'src/app/shared/models/Customer.model';
import { Component, Input, OnInit } from '@angular/core';
import { FbBaseService } from './../../../services/fb-base.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerUpdateComponent } from '../update/customer-update.component';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer?: Customer;

  constructor(private service: FbBaseService<Customer>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteCustomer(): void{
    this.service.delete("customer",this.customer?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerUpdateComponent, {
      data: this.customer
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((customer: Customer) => {
      console.log(customer);
      //if (customer?.name) {
        this.service.update('customer',this.customer?.id as string ,customer).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }
}
