import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
  constructor(protected http: HttpClient) {}

  protected handleError(error: any) {
    // এখানে লগিং, টোস্ট, ইত্যাদি করতে পারেন
    return throwError(() => error);
  }
} 