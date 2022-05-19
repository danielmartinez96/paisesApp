import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
	`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class PorPaisComponent  {

	paises:Country[]=[];
	paisesSugeridos:Country[]=[];
	termino:string='';
	hayError:boolean=false;
	constructor(private paisService:PaisService) { }


	buscar(termino: string){
		this.hayError=false;
		this.termino= termino;
		this.paisService.buscarPais(this.termino)
		.subscribe(paises=>{
			this.paises=paises;
		},(err)=>{
			this.hayError=true;
			this.paises=[];
		});
	}

	mostrarSugerencias(termino:string){
		this.hayError=false;
		this.termino= termino;
		
		this.paisService.buscarPais(this.termino)
			.subscribe(paises=>{
				this.paisesSugeridos=paises.slice(0,5)
				},(err)=>{
					this.paisesSugeridos=[];
				});
	}

	buscarSugerencia(){
		this.buscar(this.termino);
	}

}
