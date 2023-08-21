import { Ninja } from './ninjas.model';

export class GetNinjas {
  static readonly type = '[Ninjas] Get Ninjas';
}

export class SetNinjas {
  static readonly type = '[Ninjas] Set Ninjas';
  constructor(public url: string) {}
}