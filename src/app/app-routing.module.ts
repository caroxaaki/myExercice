import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicepsComponent } from './component/biceps/biceps.component'; 
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:'',
  loadChildren:()=>import('src/app/modules/exercise-physique/exercice-physique/exercice-physique-routing.module').then((m)=>m.ExercicePhysiqueRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
