import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {API_URL} from "../tokens/api-url.token";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private http: HttpClient,
              @Inject(API_URL) private readonly apiUrl: string) {};
  get(): Observable<User[]>{
    return this.http.get<User[]>
     (this.apiUrl + '/users')
  }
}

