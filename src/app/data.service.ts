import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConfig } from './api'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private apiUrl = 'https://apex.oracle.com/pls/apex/mcarred/parrainage/agent/electeurs';

  private baseUrl = apiConfig.baseUrl;


  constructor(
    private http:HttpClient
  ){}

  getElecteurs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}electeurs`)
  }


  getCandidats(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}candidats`);
  }


  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>('https://apex.oracle.com/pls/apex/mcarred/parrainage/agent/uploadfile', formData);
  }


}
