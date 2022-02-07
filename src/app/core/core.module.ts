import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports:[
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
})
export class CoreModule { }
