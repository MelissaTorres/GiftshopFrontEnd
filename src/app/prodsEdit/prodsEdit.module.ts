import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProdsEditRoutingModule } from './prodsEdit-routing.module';
import { FormsModule } from '@angular/forms';
import { ProdsEditService } from './services/prods.service';
import { ProdEditComponent } from './prod-edit/prod-edit.component';


@NgModule({
    declarations: [
        ProdEditComponent
    ],
    imports: [
        SharedModule,
        ProdsEditRoutingModule,
        FormsModule
    ],
    providers: [ProdsEditService],
    entryComponents: []
})
export class ProdsEditModule { }
