import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
