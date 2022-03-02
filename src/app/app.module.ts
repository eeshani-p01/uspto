import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import {
  CheckRequestStatusComponent,
  ConnectDataComponent,
  HomeComponent,
  RequestAccessComponent,
  SystemStatusComponent
} from './modules';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestAccessComponent,
    CheckRequestStatusComponent,
    ConnectDataComponent,
    SystemStatusComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SuiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
