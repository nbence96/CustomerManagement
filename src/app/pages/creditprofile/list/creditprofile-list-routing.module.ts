import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditprofileListComponent } from './creditprofile-list.component';

const routes: Routes = [
    {
        path: '',
        component: CreditprofileListComponent,
        data: { title: 'CreditProfile - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreditprofileListRoutingModule { }
