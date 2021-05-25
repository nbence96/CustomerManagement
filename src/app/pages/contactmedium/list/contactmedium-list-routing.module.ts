import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmediumListComponent } from './contactmedium-list.component';

const routes: Routes = [
    {
        path: '',
        component: ContactmediumListComponent,
        data: { title: 'ContactMedium - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactmediumListRoutingModule { }
