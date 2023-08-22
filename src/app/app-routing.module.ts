
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BicepsComponent } from './component/biceps/biceps.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'biceps', component: BicepsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }