import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
	providedIn: 'root'
})
export class PaisService {

	private apiUrl: string = 'https://restcountries.com/v3.1';

	get params():HttpParams{
		return new HttpParams()
		.set('fields',"name,flags,cca2,population")
	}

	constructor(private http:HttpClient) {}

	buscarPais(termino:string) :Observable<Country[]>{
		const url = `${this.apiUrl }/name/${termino}`;
		return this.http.get<Country[]>(url,{params:this.params});
	}

	buscarCapitales(termino:string):Observable<Country[]>{
		const url = `${this.apiUrl }/capital/${termino}`;
			return this.http.get<Country[]>(url,{params:this.params});
	}
	
	buscarRegion(termino:string) :Observable<Country[]>{
		const url = `${this.apiUrl }/region/${termino}`;
		return this.http.get<Country[]>(url,{params:this.params});
	}

	buscarPaisCodigo(id:string) :Observable<Country[]>{
		const url = `${this.apiUrl }/alpha/${id}`;
		return this.http.get<Country[]>(url);
	}

}
