import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {
  private valor1: number;
  constructor() { }
  saldo(valor1:number,valor2:number):number{
    return valor1 + valor2;
  }
}
