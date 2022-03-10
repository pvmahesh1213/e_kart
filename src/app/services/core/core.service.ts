import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '../serviceurls'
import { throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  urlDev = `http://localhost:5000/`;

  constructor(private $http: HttpClient) { }

  get(url) {
    url = urls[url];
    return this.$http.get(this.urlDev + url).pipe(
      catchError(error => {
        console.log('msg', error)
        let errorMsg: string;
        if (error.error && error.error.message) {
          errorMsg = `${error.error.message}`;
        } else {
          errorMsg = 'Something went wrong!';
        }
        return throwError(errorMsg);
      }),
      finalize(() => {
        console.log('finalize')
      }));
  }

  post(url, data) {
    url = urls[url];
    return this.$http.post(this.urlDev + url, data).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error && error.error.message) {
          errorMsg = `${error.error.message}`;
        } else {
          errorMsg = 'Something went wrong!';
        }
        return throwError(errorMsg);
      }),
      finalize(() => {
        console.log('finalize')
      }))
  }

}
