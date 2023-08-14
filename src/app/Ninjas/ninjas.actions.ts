import { Type } from '@angular/compiler';
import { Ninja } from './ninjas.model';

export class GetNinjas {
  static readonly type = '[Ninja] Get Ninjas';
}

export class SetNinjas {
  static readonly type = '[Ninja] Set Ninjas';
  constructor(public ninjas: Ninja[]) {}
}