import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor is processing request'); // This will print on every request
    const token =this.authService.getToken();
    
    // If there's a token, clone the request and add the Authorization header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error caught by interceptor');
        console.log('Error status:', error.status);
        console.log('Error response:', error);

        if (error.status === 401 || error.status === 403) {
          console.log('Redirecting to login page...');
          this.router.navigate(['/auth']);
        }

        throw error; // Re-throw the error
      }),
    );
  }
}
