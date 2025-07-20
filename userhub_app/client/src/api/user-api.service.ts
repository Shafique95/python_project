import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseApiService } from './base-api.service';
import { User, UserCreate } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
  private baseUrl = 'http://127.0.0.1:8000/api/v1/users';

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  createUser(data: UserCreate): Observable<User> {
    return this.http.post<User>(this.baseUrl, data)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateUser(id: number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data)
      .pipe(catchError(this.handleError));
  }
} 