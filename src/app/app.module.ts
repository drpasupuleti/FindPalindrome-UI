import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {FindPalindromeService} from './find-palindrome/find-palindrome-service';
import { FindpalindromeComponent } from './find-palindrome/find-palindrome.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FindpalindromeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FindPalindromeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
