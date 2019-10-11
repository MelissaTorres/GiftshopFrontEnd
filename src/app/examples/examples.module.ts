import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExamplesService } from './services/examples.service';

@NgModule({
  declarations: [
    ExampleListComponent,
  ],
  imports: [
    SharedModule,
    ExamplesRoutingModule
  ],
  providers: [ExamplesService],
  entryComponents: []
})
export class ExamplesModule { }
