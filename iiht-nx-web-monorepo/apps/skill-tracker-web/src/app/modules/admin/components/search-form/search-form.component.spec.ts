import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: SearchFormComponent;
  let fbMock: FormBuilder;

  beforeEach(async () => {
    //jest.setTimeout(60000);
    fbMock = new FormBuilder();
    fixture = new SearchFormComponent(
      fbMock
    );
  });

  describe('Test: Constructor', () => {
    it('should create', () => {
      expect(fixture).toBeTruthy();
    });

    it('should create searchForm', () => {
      const searchForm = {
        name: '',
        associateId: '',
        skill: ''
      };
      expect(fixture.searchForm.value).toEqual(searchForm);
    });

    it('should return value', done => {
      const searchForm = {
        name: 'test',
        associateId: 'CST001',
        skill: 'SK001'
      };
      let obs = fixture.onSearchClicked;
      obs.subscribe(data => {
        expect(data).toEqual(searchForm);
        done();
      });
      fixture.searchForm.setValue(searchForm);
      fixture.onSearch();
    });

  });


});
