import { Component, OnInit } from '@angular/core';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  paises:any[]=[];
	termino:string='';
	hayError:boolean=false;

  constructor(private paisService:PaisService) { }


  buscar(termino:string){

    this.hayError=false;
    this.termino=termino;

    this.paisService.buscarCapitales(termino)
      .subscribe(paises=>{
        this.paises=paises;
      },
      (err)=>{
        this.hayError=true;
        this.paises=[];
      }
      )


  }

  mostrarSugerencias(){

  }
}
