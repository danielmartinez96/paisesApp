import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{

  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  @Output() onDebounce:EventEmitter<string>= new EventEmitter();
  
  debounce: Subject<string>= new Subject();
  termino:string= '';
  @Input() placeholder:string= '';

  ngOnInit(): void {
    this.debounce
    .pipe(
      debounceTime(400)
    )
    .subscribe(valor=>{
      console.log(valor);
      this.onDebounce.emit(valor);
    })
  }

  teclaPresionada(){
    this.debounce.next(this.termino);
  }

	buscar(){
		this.onEnter.emit(this.termino);
	}
}
