import { NotfoundComponent } from './components/notfound/notfound.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { FoodpageComponent } from './components/foodpage/foodpage.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tags/:tags',component:HomeComponent},
  {path:'foodpage/:id',component:FoodpageComponent},
  {path:'cartpage',component:CartpageComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
