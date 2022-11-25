import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { DemoService } from "src/app/modules/demo/services/demo.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { UserData } from "src/app/modules/demo/models/user-data.model";
import { Observable, of, BehaviorSubject } from "rxjs";

@UntilDestroy()
@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit {
  public userData$: BehaviorSubject<Array<UserData>> = new BehaviorSubject<
    Array<UserData>
  >([]);

  constructor(private _demoService: DemoService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this._demoService
      .getData()
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: Array<UserData>) => {
          this.userData$.next(res);
        },
        () => {}
      );
  }

  public onRemove(id: number): void {
    this._demoService
      .deleteItem(id)
      .pipe(untilDestroyed(this))
      .subscribe(
        (res: number) => {
          this.userData$.next(
            this.userData$
              .getValue()
              .filter((user: UserData) => user.id !== res)
          );
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
          this.userData$.next([...this.userData$.getValue(), res]);
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
          const index: number = this.userData$
            .getValue()
            .findIndex((x: UserData) => x.id === res.id);
          if (index >= 0) {
            const newItems: Array<UserData> = [...this.userData$.getValue()];
            newItems[index] = res;
            this.userData$.next(newItems);
          }
        },
        () => {}
      );
  }

  public onLike(): void {
    alert("onLike");
  }

  public onSend(): void {
    alert("onSend");
  }
  public onChat(): void {
    alert("onChat");
  }
}
