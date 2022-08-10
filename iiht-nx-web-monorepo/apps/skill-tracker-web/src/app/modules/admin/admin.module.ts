import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ]
})
export class AdminModule { }
