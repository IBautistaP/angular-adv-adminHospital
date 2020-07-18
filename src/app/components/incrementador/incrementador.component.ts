import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress', { static: false }) txtProgress: ElementRef;
  @Input() progreso: number;
  @Input() leyenda: string;
  @Input() btnClass: string;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onchanges(newValue: number): void {
    // const elementoHtml: any = document.getElementsByName("progreso")[0];
    this.validacionValor(newValue);
    // elementoHtml.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValorMayor(valor: number): void {
    this.validacionValor(this.progreso);
    if (this.progreso === 100) {
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  cambiarValorMenor(valor: number): void {
    this.validacionValor(this.progreso);
    if (this.progreso === 0) {
      return;
    }
    this.progreso = this.progreso - valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  validacionValor(valor: number): void {
    this.valorMayor(valor);
    this.valorMenor(valor);
  }

  valorMayor(value: number): void {
    if (value >= 100) {
      this.progreso = 100;
    }
  }

  valorMenor(value: number): void {
    if (value === null) {
      return;
    }
    if (value <= 0) {
      this.progreso = 0;
    }
  }
}
