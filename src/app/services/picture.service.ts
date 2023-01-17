import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private baseUrl;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl="https://localhost:7140/picture"
  }

  uploadPicture(file: FormData):Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/upload`, file, {responseType: 'text'});
  }
}
