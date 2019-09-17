import { Injectable, NgModule } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		const dupReq = req.clone({
			headers: req.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbHVubyIsImV4cCI6MTU2ODc2MTY3NX0.BgMVJ3YxhsFwC-9fq6zCAM11_6xWi51baF9KJWYo5lI'),
		});
		return next.handle(dupReq);
	}
}
    
    
@NgModule({
	providers: [{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpsRequestInterceptor,
		multi: true,
	}]
})
    
    
export class Interceptor {}