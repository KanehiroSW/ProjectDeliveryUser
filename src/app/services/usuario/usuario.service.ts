import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Usuario } from '../auth/Usuario';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getUser(idUsuario:number):Observable<Usuario> {
    return this.http.get<Usuario>(environment.urlApi+"usuario/"+idUsuario).pipe(
      catchError(this.handleError)
    )
  }

  updateUser(userRequest:Usuario):Observable<any> {
    return this.http.put(environment.urlApi+"usuario", userRequest).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
