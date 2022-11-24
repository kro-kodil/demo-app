import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DemoService {
  constructor(private http: HttpClient) {}
  readonly API_PREFIX_KPI: string = "https://jsonplaceholder.typicode.com";

  public getData(): Observable<any> {
    return this.http
      .get(`${this.API_PREFIX_KPI}/todos/`)
      .pipe(map((res: any) => res));
  }
}
