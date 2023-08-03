import { Component,OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/services/exercise.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent implements OnInit{
data:any;

url: string = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';
  constructor(private exerciseService:ExerciseService){

  }
  ngOnInit(): void {
    this.getExercisePhysiqueData();
  }

  getExercisePhysiqueData():void{
   this.exerciseService.getExercises().subscribe({next:(data)=>{
    this.data=data;
    console.log('carole', this.data[0].name)

  }})
  
}
}

