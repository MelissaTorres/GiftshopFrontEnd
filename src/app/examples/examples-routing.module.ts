import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleListComponent } from './example-list/example-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
