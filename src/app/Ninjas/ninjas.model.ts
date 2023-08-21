export interface Ninja {
  id: number;
  name: string;
  type: string;
  muscle: string;
  description: string;
  dificult : string;
}

export interface NinjasStateModel {
  ninjas: Ninja[];
}