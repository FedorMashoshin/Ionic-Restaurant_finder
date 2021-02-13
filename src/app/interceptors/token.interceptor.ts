import { environment } from './../../environments/environment';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.urlExluded(request.url)) {
            return next.handle(request);
        } else {
            return next.handle(this.addToken(request));
        }
    }

    private urlExluded(url): Boolean {
        if (url.indexOf('api.yelp.com') >= 0) {
            return false;
        } else {
            return true;
        }
    }

    private addToken(req: HttpRequest<any>) {
        return req.clone({
            headers: new HttpHeaders({
                Authorization: `Bearer ${environment.yelpKey}`
            })
        })
    }
}
