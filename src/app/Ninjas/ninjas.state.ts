import { State, Action, StateContext } from '@ngxs/store';
import { Injectable, Inject } from '@angular/core'
import { Ninja } from './ninjas.model';
import { NinjaService } from './ninjas.service';
import { GetNinjas, SetNinjas } from './ninjas.actions';
import { from } from 'rxjs';

export interface NinjaStateModel {
  ninjas: Ninja[];
}

@State<NinjaStateModel>({
  name: 'ninjas',
  defaults: {
    ninjas: []
  }
})
@Injectable()
export class NinjaState {
  constructor(@Inject(NinjaService) private ninjaService: NinjaService) {}

  @Action(GetNinjas)
getNinjas({ dispatch }: StateContext<NinjaStateModel>) {
  return this.ninjaService.getNinjas().subscribe((ninjas: Ninja[]) => {
    dispatch(new SetNinjas(ninjas));
  });
}

  @Action(SetNinjas)
  setNinjas({ patchState }: StateContext<NinjaStateModel>, { ninjas }: SetNinjas) {
    patchState({ ninjas });
  }
}