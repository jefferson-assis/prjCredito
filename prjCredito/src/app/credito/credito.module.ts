import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoComponent } from './component/saldo';
import { SaldoService } from './services';



@NgModule({
  declarations: [SaldoComponent],
  imports: [
    CommonModule
  ], exports:[
    SaldoComponent
  ],
  providers: [
    SaldoService
  ]
})
export class CreditoModule { }
