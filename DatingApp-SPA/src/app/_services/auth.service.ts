import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwthelper = new JwtHelperService();
  decodedToken: any;
  baseUrl = environment.apiUrl + 'auth/';

constructor(private http: HttpClient) { }

login(model: any) { // This is just like Postman, used tpo create JWT token and to be used by other components

    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwthelper.decodeToken(user.token);
          console.log(this.decodedToken);

        }
      })
    );

}

register(model: any) {

  return this.http.post(this.baseUrl + 'register', model);

}
hide() {
  return localStorage.getItem('token');
}

loggedIn() {

  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);

}
}
