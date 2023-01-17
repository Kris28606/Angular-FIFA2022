import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../domain/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl="https://localhost:7140/groups";
  }

  GetMyGroups():Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.baseUrl}/all`);
  }

  AddGroup(group: Group):Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseUrl}/new`, group);
  }
}
