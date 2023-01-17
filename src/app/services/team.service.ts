import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../domain/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl="https://localhost:7140/team";
  }

  GetMyTeams():Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.baseUrl}/all`);
  }

  AddTeam(team: Team):Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}/new`, team);
  }

  GetTeamsForGroup(groupId: number):Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.baseUrl}/${groupId}`);
  }
}
