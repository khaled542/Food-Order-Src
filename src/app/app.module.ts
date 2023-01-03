import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'ng-starrating';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchfoodPipe } from './pipes/searchfood.pipe';
import { TagsComponent } from './components/tags/tags.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

NavbarComponent
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SearchfoodPipe,
    TagsComponent,
    FoodpageComponent,
    CartpageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*

*/