import { Component, OnInit } from '@angular/core';
import { SaldoService } from '../../services';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {
  private valor1: number;
  constructor(private saldo: SaldoService) { }

  ngOnInit(): void {

  }
  calcula(valorInserido: number){
    this.valor1 = this.saldo.saldo(this.valor1,valorInserido);
  }

  get pegaValor(){
    return this.valor1;
  }
}
