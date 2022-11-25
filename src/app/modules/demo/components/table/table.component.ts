import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddEditItemModalComponent } from "src/app/modules/demo/components/add-edit-item-modal/add-edit-item-modal.component";
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
  @Output() onEdit: EventEmitter<UserData> = new EventEmitter();
  @Output() onAdd: EventEmitter<UserData> = new EventEmitter();
  public sortBy: string = "id";
  public asc: boolean = true;
  public searchText = new FormControl("");

  constructor(private _modalService: NgbModal) {}

  ngOnInit(): void {}

  public remove(id: number): void {
    this.onRemove.emit(id);
  }
  public edit(item: UserData): void {
    const modalRef = this._modalService.open(AddEditItemModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.item = item;
    modalRef.result.then(
      (res: UserData) => {
        this.onEdit.emit(res);
      },
      () => {}
    );
  }
  public add(): void {
    const modalRef = this._modalService.open(AddEditItemModalComponent, {
      centered: true,
    });
    modalRef.result.then(
      (res: UserData) => {
        this.onAdd.emit(res);
      },
      () => {}
    );
  }

  public sort(property: string): void {
    this.sortBy = property;
    this.asc = !this.asc;
  }
}
