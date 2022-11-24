import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DemoService } from "src/app/modules/demo/services/demo.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { UserData } from "src/app/modules/demo/models/user-data.model";
import { Observable, of } from "rxjs";

@UntilDestroy()
@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public userData$: Observable<Array<UserData>> = of([]);

  constructor(private _demoService: DemoService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.userData$ = this._demoService.getData();
  }

  public onRemove(id: number): void {
    alert("removed");
  }

  public onEdit(id: number): void {
    alert("edit");
  }
}
