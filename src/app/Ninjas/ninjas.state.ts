import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Ninja } from './ninjas.model';
import { GetNinjas } from './ninjas.actions';
import { HttpClient } from '@angular/common/http';
import { ExerciseService } from '../services/exercise.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface NinjasStateModel {
  ninjas: Ninja[];
}

@State<NinjasStateModel>({
  name: 'ninjas',
  defaults: {
    ninjas: []
  }
})
@Injectable()
export class NinjasState {
  constructor(private http: HttpClient, private service: ExerciseService) {}

  @Selector()
  static getNinjas(state: NinjasStateModel) {
    return state.ninjas;
  }

  @Action(GetNinjas)
  getNinjas(ctx: StateContext<NinjasStateModel>, action: GetNinjas) {
    return this.service.getExercises().pipe(
      tap((exercise: any) => {
        const state = exercise;
        ctx.patchState({ ninjas: state });
        console.log('carol', exercise);
      })
    );
  }
}