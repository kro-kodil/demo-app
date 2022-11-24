import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { UserData } from "src/app/modules/demo/models/user-data.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() userData: Array<UserData> | null = [];
  @Output() onRemove: EventEmitter<number> = new EventEmitter();
  @Output() onEdit: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public remove(id: number): void {
    this.onRemove.emit(id);
  }
  public edit(id: number): void {
    this.onEdit.emit(id);
  }
}
