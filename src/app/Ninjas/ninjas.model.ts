export interface Ninja {
  object: number;
  name: string;
  type: string;
  muscle: string;
 difficulty: string;
  instructions: string;
}

export interface NinjasStateModel {
  ninjas: Ninja[];
}