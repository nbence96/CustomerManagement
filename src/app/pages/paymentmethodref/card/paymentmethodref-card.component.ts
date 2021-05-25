import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { PaymentMethodRef } from 'src/app/shared/models/PaymentMethodRef.model';
import { PaymentmethodrefUpdateComponent } from '../update/paymentmethodref-update.component';

@Component({
  selector: 'app-paymentmethodref-card',
  templateUrl: './paymentmethodref-card.component.html',
  styleUrls: ['./paymentmethodref-card.component.scss']
})
export class PaymentmethodrefCardComponent implements OnInit {
  @Input() paymentmethodref?: PaymentMethodRef;

  constructor(private service: FbBaseService<PaymentMethodRef>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deletePaymentmethodref(): void{
    this.service.delete("paymentmethodref",this.paymentmethodref?.id as string);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentmethodrefUpdateComponent, {
      data: this.paymentmethodref
    });
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((paymentmethodref: PaymentMethodRef) => {
      console.log(paymentmethodref);
      //if (customer?.name) {
        this.service.update('paymentmethodref',this.paymentmethodref?.id as string ,paymentmethodref).then(id => { console.log(id); });
      //}
    }, err => {
      console.warn(err);
    });
  }

}
