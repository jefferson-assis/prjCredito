import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaldoComponent } from './component/saldo';



@NgModule({
  declarations: [SaldoComponent],
  imports: [
    CommonModule
  ], exports:[
    SaldoComponent
  ]
})
export class CreditoModule { }
