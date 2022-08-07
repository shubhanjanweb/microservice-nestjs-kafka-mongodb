import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchService } from '../../search.service';

export interface Associate {
  name: string;
  associateId: string;
  email: string;
  mobile: string;
  skills: Skill[];
}

export interface Skill {
  skillName: string;
  skillType: SKILLTYPE | string;
  expertiseLevel: number;
}

export enum SKILLTYPE {
  TECH = 'Technical',
  NONTECH = 'Non Technical'
};

export interface Skill {
  skillId: string;
  skillName: string;
}

export interface SearchData {
  name?: string;
  associateId?: string;
  skillId?: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  associates$: Observable<Associate[]> | null = null;
  skills$: Observable<Skill[]> | null = null;

  constructor(private srvc: SearchService) {
  }

  ngOnInit(): void {
    this.skills$ = this.srvc.getSkillList().pipe(map(i => i.data));
  }

  onSearch(data: SearchData) {
    this.associates$ = this.srvc.getProfiles(data).pipe(map(i => i.data));
  }

}
