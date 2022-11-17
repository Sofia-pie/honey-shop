import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MainPageModule,
    CoreModule,
    AppRoutingModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
