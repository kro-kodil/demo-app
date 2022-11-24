import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo/demo.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    DemoComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
