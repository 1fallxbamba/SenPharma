import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import {Api} from '../../config/api';

@Injectable({
  providedIn: 'root'
})
export class DatafetcherService {

  constructor(private http: HttpClient, private api: Api) { }

  getPharmacies(): Observable<any> {

    return this.http.get<any>(this.api.buildEndpoint('pharmacies.php'));

  }

  getPharmacyByName(requestType: string, name: string): Observable<any> {

    if (requestType === 'SEARCH') {

      return this.http.get<any>(this.api.buildEndpoint('search-pharmacy.php', { name: 'name', value: name }));

    } else {

      return this.http.get<any>(this.api.buildEndpoint('pharmacy-name.php', { name: 'name', value: name }));

    }

  }

  getPharmaciesByStatus(status: string) {

    return this.http.get(this.api.buildEndpoint('filter-pharmacies.php', { name: 'status', value: status }));

  }

  getDrugByName(name: string): Observable<any> {

    return this.http.get<any>(this.api.buildEndpoint('drug.php', { name: 'name', value: name }));

  }

}
