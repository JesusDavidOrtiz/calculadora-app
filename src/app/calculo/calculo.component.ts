import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  titulo = 'Aplicación de Calculadora';
  N1:number;
  N2:number;
  resultado:number;

  Sumar():void{
    this.resultado = this.N1 + this.N2;
  }
  Restar():void{
    this.resultado = this.N1 - this.N2;
  }
  Multiplicar():void{
    this.resultado = this.N1 * this.N2;
  }
  Dividir():void{
    this.resultado = this.N1 / this.N2;
  }
  constructor() { }

  ngOnInit() {
  }

}
