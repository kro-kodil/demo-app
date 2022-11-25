import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ToastrInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToastrService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          switch (req.method) {
            case "PUT":
              this.toasterService.success("Success");
              break;
            case "POST":
              this.toasterService.success("Success");
              break;
            case "DELETE":
              this.toasterService.success("Success");
              break;
            default:
          }
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              break;
            case 403:
              this.toasterService.error(
                `<br/>You do not have permissions to perform this action.`,
                error.error?.errorName || "Error",
                { disableTimeOut: true, enableHtml: true, tapToDismiss: false }
              );
              break;
            default:
              this.toasterService.error(``, error.error?.errorName || "Error", {
                disableTimeOut: true,
                enableHtml: true,
                tapToDismiss: false,
              });
          }
        }
        return throwError(() => error);
      })
    );
  }
}
