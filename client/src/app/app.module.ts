import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProvider } from './service/search';
import { HttpClientModule } from '@angular/common/http';
import { BookFlightPage } from './book-flight/book-flight.page';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, BookFlightPage],
  entryComponents: [BookFlightPage],
  imports: [ CommonModule,
    FormsModule,
    IonicModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,  HttpClientModule,],
  providers: [
    StatusBar,
    SplashScreen,
    SearchProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
