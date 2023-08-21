import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Ninja } from 'src/app/Ninjas/ninjas.model';
import { GetNinjas } from 'src/app/Ninjas/ninjas.actions';
import { NinjasState } from 'src/app/Ninjas/ninjas.state';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent implements OnInit {
  ninjas: any;
  @Select(NinjasState.getNinjas) biceps$: Observable<Ninja[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
   // const apiUrl = "https://api.api-ninjas.com/v1/exercises?muscle=biceps";
   const apiUrl = "https://api.api-ninjas.com/v1/exercises?muscle=biceps";

    this.store.dispatch(new GetNinjas());
    this.biceps$?.subscribe({
      next: (data: Ninja[]) => {
        console.log('carol', data);
        this.ninjas=data
      }
    });

  }
}

