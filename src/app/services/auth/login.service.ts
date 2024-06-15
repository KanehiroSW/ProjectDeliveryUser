import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.urlHost}auth/usuario`;

  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(dni: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/login`, { dni, password })
      .pipe(tap(user => {
        this.currentUserSubject.next(user);
      }));
  }

  get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  logout() {
    this.currentUserSubject.next(null);
  }
}