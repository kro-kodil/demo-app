import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoRoutingModule } from "./demo-routing.module";
import { DemoComponent } from "./components/demo/demo.component";
import { TableComponent } from "./components/table/table.component";
import { CardComponent } from "./components/card/card.component";
import { AddEditItemModalComponent } from "./components/add-edit-item-modal/add-edit-item-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    DemoComponent,
    TableComponent,
    CardComponent,
    AddEditItemModalComponent,
  ],
  imports: [CommonModule, DemoRoutingModule, NgbModule, ReactiveFormsModule],
})
export class DemoModule {}
