import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  public deleteItem(id: number): Observable<number> {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: id,
    };
    return this.http.delete(`${API}/todos/`, options).pipe(map(() => id));
  }

  public getItem(id: number): Observable<UserData> {
    return this.http
      .get(`${API}/todos/${id}`)
      .pipe(map((res: any) => new UserData(res)));
  }

  public addItem(data: UserData): Observable<UserData> {
    return this.http
      .post(`${API}/todos`, data)
      .pipe(map((res: any) => new UserData(res)));
  }

  public editItem(item: UserData): Observable<UserData> {
    return this.http
      .post(`${API}/todos/${item.id}`, item)
      .pipe(map((res: any) => new UserData(res)));
  }
}
