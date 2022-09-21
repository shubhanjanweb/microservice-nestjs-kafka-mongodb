import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Associate, Skill } from '../search-page/search-page.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input('associates') associates$: Observable<Associate[]> | null = null;

  constructor() {
  }

  trackByFn(index: number, item: Associate) {
    return item.associateId;
  }

  ngOnInit(): void {
  }

  filterSkill(skills: Skill[], type: string): Skill[] {
    return skills.filter(s => s.skillType === type);
  }

}
