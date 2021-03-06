import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from "./home/home-page/home-page.component";

import { DietModule } from "./diet/diet.module";
import { FoodModule } from "./food/food.module";
import { SharedModule } from "./shared/shared.module";

import { BackendFakeService } from "./core/services/backend-fake/backend-fake.service";

import { FoodService } from "./food/food.service";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    DietModule,
    FoodModule,
    
    
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BackendFakeService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),
  ],
  providers: [
    SharedModule,
    FoodService,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
