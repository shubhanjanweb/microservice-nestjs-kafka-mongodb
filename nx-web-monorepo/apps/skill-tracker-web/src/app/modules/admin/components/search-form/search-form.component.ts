import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { SearchData, Skill } from '../search-page/search-page.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(1), Validators.maxLength(30)]],
    associateId: ['', [Validators.maxLength(30)]],
    skill: ['']
  });

  matcher: ErrorStateMatcher = new MyErrorStateMatcher();

  @Input('skillOptions') skillOptions$: Observable<Skill[]> | null = null;
  @Output('onSearchClicked') onSearchClicked: EventEmitter<SearchData> = new EventEmitter<SearchData>();


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSearch() {
    if (this.searchForm.valid) {
      this.onSearchClicked.next(this.searchForm.value);
    }
  }

}
