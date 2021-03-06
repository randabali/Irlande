import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TouristiqueComponent } from './components/touristique/touristique.component';
import { FoodComponent } from './components/food/food.component';


const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'touristique', component: TouristiqueComponent },
  {path:'food', component:FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
