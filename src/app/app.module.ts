import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BicepsComponent } from './component/biceps/biceps.component';
import { ExerciseService } from './services/exercise.service';
import { ExercicePhysiqueModule } from './modules/exercise-physique/exercice-physique/exercice-physique.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { NinjasState } from './Ninjas/ninjas.state';

@NgModule({
  declarations: [
    AppComponent,
    BicepsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExercicePhysiqueModule,
    NgxsModule.forRoot([NinjasState]),


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //comment
}