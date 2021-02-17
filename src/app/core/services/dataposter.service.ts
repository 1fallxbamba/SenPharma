import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


const adminAPI = 'http://localhost/adminapi/spharma/';

const httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })

};

@Injectable({
  providedIn: 'root'
})
export class DataposterService {

  constructor(private http: HttpClient) { }

  postMessage(messageToPost): Observable<any> {

    return this.http.post<any>(adminAPI + 'message.php', JSON.stringify(messageToPost), httpOptions);

  }

}
