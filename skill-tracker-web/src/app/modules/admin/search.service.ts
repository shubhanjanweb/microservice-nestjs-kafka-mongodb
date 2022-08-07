import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, take } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiBaseUrl;
const profileUrl = 'admin/profiles';
const skillUrl = 'admin/skills';

@Injectable()
export class SearchService {


  constructor(private http: HttpClient) {
  }

  getSkillList(): Observable<any> {
    return this.http.get(baseUrl + skillUrl).pipe(take(1));
  }

  getProfiles(query: any): Observable<any> {
    return this.http.get(baseUrl + profileUrl, {
      params: query
    }).pipe(take(1));
  }
}
