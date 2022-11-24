import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { take } from "rxjs/operators";
import { DemoService } from "src/app/modules/demo/services/demo.service";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {
  constructor(private _demoService: DemoService) {}

  ngOnInit(): void {}

  private getData(): void {
    this._demoService
      .getData()
      .pipe(
        take(1),
        takeUntil(this.alive$),
        finalize(() => this.loading$.next(false))
      )
      .subscribe(
        (res: KPIData) => {
          this.kpiData = res;
        },
        (err) => {
          this._toastr.error(messagesEnv.dataError);
        }
      );
  }
}
