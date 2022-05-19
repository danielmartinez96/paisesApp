import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin:5px;
    }
  `
  ]
})
export class PorRegionComponent  {

  regiones:string[]=['Africa','Americas','Asia ','Europe','Oceania']
  regionActiva:string="";

  paises:Country[]=[];
	termino:string='';
	hayError:boolean=false;

  constructor(private paisService:PaisService) { }

    


  activarRegion(region:string){
    if(region===this.regionActiva)return;
    this.regionActiva=region;
    

    this.hayError=false;
		this.termino= region;
		this.paisService.buscarRegion(this.termino)
		.subscribe(paises=>{
			this.paises=paises;
		},(err)=>{
			this.hayError=true;
			this.paises=[];
		});
  
  }

  getClassCss(region:string){
    return (region!==this.regionActiva)? 'btn btn-outline-primary': 'btn btn-primary'
  }
}
