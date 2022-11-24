import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserData } from "src/app/modules/demo/models/user-data.model";
import { API } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DemoService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<Array<UserData>> {
    return this.http
      .get(`${API}/todos/`)
      .pipe(map((res: any) => res.map((x: any) => new UserData(x))));
  }
}
