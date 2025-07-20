import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserCreate {
  name: string;
  email: string;
}

const API_BASE = 'http://127.0.0.1:8000/api/v1/users'; // FastAPI backend URL

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = API_BASE;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  createUser(data: UserCreate): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, data: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }
} 