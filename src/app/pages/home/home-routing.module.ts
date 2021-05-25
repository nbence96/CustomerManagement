import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'customer',
                loadChildren: () => import('./../customer/list/customer-list.module').then(m => m.CustomerListModule),
            },
            {
                path: 'accountref',
                loadChildren: () => import('./../accountref/list/accountref-list.module').then(m => m.AccountrefListModule),
            },
            {
                path: 'agreementref',
                loadChildren: () => import('./../agreementref/list/agreementref-list.module').then(m => m.AgreementrefListModule),
            },
            {
                path: 'characteristic',
                loadChildren: () => import('./../characteristic/list/characteristic-list.module').then(m => m.CharacteristicListModule),
            },
            {
                path: 'contactmedium',
                loadChildren: () => import('./../contactmedium/list/contactmedium-list.module').then(m => m.ContactmediumListModule),
            },
            {
                path: 'creditprofile',
                loadChildren: () => import('./../creditprofile/list/creditprofile-list.module').then(m => m.CreditprofileListModule),
            },
            {
                path: 'mediumcharacteristic',
                loadChildren: () => import('./../mediumcharacteristic/list/mediumcharacteristic-list.module').then(m => m.MediumcharacteristicListModule),
            },
            {
                path: 'paymentmethodref',
                loadChildren: () => import('./../paymentmethodref/list/paymentmethodref-list.module').then(m => m.PaymentmethodrefListModule),
            },
            {
                path: 'relatedparty',
                loadChildren: () => import('./../relatedparty/list/relatedparty-list.module').then(m => m.RelatedpartyListModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
