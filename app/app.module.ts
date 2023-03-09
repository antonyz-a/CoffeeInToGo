import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { NonAlcoholicDrinksComponent } from './components/non-alcoholic-drinks/non-alcoholic-drinks.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { AlchocolDrinksComponent } from './components/alchocol-drinks/alchocol-drinks.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    NonAlcoholicDrinksComponent,
    BreakfastComponent,
    AlchocolDrinksComponent,
    CocktailsComponent,
    HomeComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatIconModule,
      MatMenuModule,
      MatExpansionModule,
      MatButtonModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
