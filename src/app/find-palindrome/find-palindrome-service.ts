import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import {  } from 'rxjs/operators';


const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

@Injectable()
export class FindPalindromeService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/findPalindrome';


  public findPalindrome(pageURL) {
    return timer(0, 3000).pipe((() => this.http.post(this.userUrl, pageURL,
      { headers, responseType: 'text'})));
  }

}
