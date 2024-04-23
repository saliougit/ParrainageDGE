import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://apex.oracle.com/pls/apex/mcarred/parrainage/agent/electeurs';


  constructor(
    private http:HttpClient
  ){}

  getElecteurs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
