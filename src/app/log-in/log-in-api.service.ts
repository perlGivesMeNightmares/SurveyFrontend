import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../env';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  attemptLogin(isRegister, userInfo): any {
    if (isRegister) {
      return this.http.post(`${API_URL}/register`, userInfo, {headers: {"Content-Type": "application/json"}});
    }
    return this.http.post(`${API_URL}/login`, userInfo, {headers: {"Content-Type": "application/json"}});
  }

}