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
    this._demoService
      .deleteItem(id)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: number) => {
          console.log(res);
        },
        () => {}
      );
  }

  public onAdd(item: UserData): void {
    this._demoService
      .addItem(item)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: UserData) => {
          console.log(res);
        },
        () => {}
      );
  }

  public onEdit(item: UserData): void {
    this._demoService
      .editItem(item)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: UserData) => {
          console.log(res);
        },
        () => {}
      );
  }
}
