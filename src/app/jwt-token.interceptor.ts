import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor, OnInit {

  constructor() {
    console.log("constructor JwtTokenInterceptor in epfFrontend");
  }

  ngOnInit(): void {
    console.log("onInit JwtTokenInterceptor in epfFrontend");
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept in epf frontend");
    return next.handle(request);
  }
}
