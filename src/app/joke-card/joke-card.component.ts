import { Component } from '@angular/core';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.css']
})
export class JokeCardComponent {
  informacionRecibida:any

  constructor(private variableServicio:ChuckService){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
}

  obtener(){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
   
  }
}
