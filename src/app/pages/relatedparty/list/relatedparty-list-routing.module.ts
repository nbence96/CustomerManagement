import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatedpartyListComponent } from './relatedparty-list.component';

const routes: Routes = [
    {
        path: '',
        component: RelatedpartyListComponent,
        data: { title: 'RelatedParty - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RelatedpartyListRoutingModule { }
