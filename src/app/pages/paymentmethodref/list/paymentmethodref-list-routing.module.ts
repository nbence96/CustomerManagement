import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentmethodrefListComponent } from './paymentmethodref-list.component';

const routes: Routes = [
    {
        path: '',
        component: PaymentmethodrefListComponent,
        data: { title: 'PaymentMethodRef - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PaymentmethodrefListRoutingModule { }
