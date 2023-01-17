import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../domain/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl="https://localhost:7140/match";
  }

  GetMatchs():Observable<Match[]> {
    return this.httpClient.get<Match[]>(`${this.baseUrl}/all`);
  }

  AddMatch(match: Match):Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}/new`, match);
  }
}
