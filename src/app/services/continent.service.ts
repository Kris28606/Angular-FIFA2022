import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Continent } from '../domain/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  private baseUrl;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl="https://localhost:7140/enum";
  }

  GetContinents():Observable<Continent[]> {
    return this.httpClient.get<Continent[]>(`${this.baseUrl}/continent`);
  }
}
