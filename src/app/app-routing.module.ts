import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export enum AppRoutes {
  DEMO = "demo",
}
const routes: Routes = [
  { path: "", redirectTo: AppRoutes.DEMO, pathMatch: "full" },
  {
    path: AppRoutes.DEMO,
    loadChildren: () =>
      import("./modules/demo/demo.module").then((m) => m.DemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
