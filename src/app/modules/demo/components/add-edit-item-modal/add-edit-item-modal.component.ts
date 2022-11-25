import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserData } from "src/app/modules/demo/models/user-data.model";

@Component({
  selector: "app-add-edit-item-modal",
  templateUrl: "./add-edit-item-modal.component.html",
  styleUrls: ["./add-edit-item-modal.component.scss"],
})
export class AddEditItemModalComponent implements OnInit {
  @Input() item: UserData | undefined;
  public form!: FormGroup;

  constructor(private _fb: FormBuilder, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    if (this.item) {
      this.form = this._fb.group({
        id: [this.item.id, Validators.required],
        title: [this.item.title, Validators.required],
        completed: [this.item.completed],
      });
    } else {
      this.form = this._fb.group({
        title: [undefined, Validators.required],
        completed: [undefined],
      });
    }
  }

  private getFormData(): UserData {
    return new UserData(this.form.value);
  }

  public save(): void {
    if (this.form.valid) {
      this.activeModal.close(this.getFormData());
    }
  }

  public cancel(): void {
    this.activeModal.close(false);
  }
}
