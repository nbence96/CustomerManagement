import { AgreementrefListComponent } from './agreementref-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AgreementrefListComponent,
        data: { title: 'Agreementref - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgreementrefListRoutingModule { }
