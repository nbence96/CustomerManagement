import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumcharacteristicListComponent } from './mediumcharacteristic-list.component';

const routes: Routes = [
    {
        path: '',
        component: MediumcharacteristicListComponent,
        data: { title: 'MediumCharacteristic - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MediumcharacteristicListRoutingModule { }
