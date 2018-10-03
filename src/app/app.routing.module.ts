import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FindpalindromeComponent } from './find-palindrome/find-palindrome.component';

const routes: Routes = [
  { path: 'calculate-aoc', component: FindpalindromeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
