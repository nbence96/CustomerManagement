import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteristicListComponent } from './characteristic-list.component';

const routes: Routes = [
    {
        path: '',
        component: CharacteristicListComponent,
        data: { title: 'Characteristic - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CharacteristicListRoutingModule { }
