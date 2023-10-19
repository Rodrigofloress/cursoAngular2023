import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    CardsComponent, 
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent,
    TabComponent
  ]
})
export class SharedModule { }
