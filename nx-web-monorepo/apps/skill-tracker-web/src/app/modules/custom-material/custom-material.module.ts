import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class CustomMaterialModule { }
