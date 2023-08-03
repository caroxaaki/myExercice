import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicePhysiqueRoutingModule } from './exercice-physique-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';


@NgModule({
  declarations: [],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
  })
  export class ExercisePhysiqueModule { }

  imports:[
    CommonModule,
    ExercicePhysiqueRoutingModule
  ]

export class ExercicePhysiqueModule { }
