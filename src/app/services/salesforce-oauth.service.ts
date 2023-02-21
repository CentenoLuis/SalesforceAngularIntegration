import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

const initUser: Usuario = {
  username: '',
  password: '',
  orgType: '',
  secretId: '',
};

@Injectable({
  providedIn: 'root',
})
export class SalesforceOAuthService {
  private user$ = new BehaviorSubject<Usuario>(initUser);

  constructor(private http: HttpClient) {}

  get myUser$(): Observable<Usuario> {
    return this.user$.asObservable();
  }

  setUser(user: Usuario): void {
    this.user$.next(user);
  }

  getTokenService(): Observable<Object> {
    return this.http.get('http://localhost:3000/login');
  }

  getGoogleOauth(): Observable<Object> {
    return this.http.get('http://localhost:3000/auth/google');
  }

  getUserSession(user: Usuario): void {
    /*     console.log('Dentro de getUserSession***', JSON.stringify(user));
    return this.http.post<any>('http://localhost:3000/getSession', user); */
    this.http
      .post<any>('http://localhost:3000/getSession', user)
      .subscribe((resp) => {
        console.log('*** Respuesta from NodeJs: ', resp);
        this.setUser({
          username: resp.userId,
          password: user.password,
          secretId: user.secretId,
          orgType: user.orgType,
        });
      });
  }
}
