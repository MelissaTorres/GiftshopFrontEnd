import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ProdEditComponent } from './prod-edit/prod-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ProdEditComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdsEditRoutingModule { }
