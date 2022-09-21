import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/skill-tracker-web/src/environments/environment';
import { Observable, take } from 'rxjs';

@Injectable()
export class SearchService {

  baseUrl = environment.apiBaseUrl;
  profileUrl = 'admin/profiles';
  skillUrl = 'admin/skills';

  constructor(private http: HttpClient) {
    console.log('baseUrl', this.baseUrl);
  }

  getSkillList(): Observable<any> {
    return this.http.get(this.baseUrl + this.skillUrl).pipe(take(1));
  }

  getProfiles(query: any): Observable<any> {
    return this.http.get(this.baseUrl + this.profileUrl, {
      params: query
    }).pipe(take(1));
  }
}
