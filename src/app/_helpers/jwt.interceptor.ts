import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let currentUser = this.authenticationService.currentUserValue;
        // implementaçao com JWT
        // if (currentUser && currentUser.token) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.token}`
        //         }
        //     });
        // }

        // implementação login panvel
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'LojaVirtualPanvelUserId': '123'
            }
        });


        return next.handle(request);
    }
}