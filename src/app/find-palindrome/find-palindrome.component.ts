import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { FindPalindromeService } from './find-palindrome-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-find-palindrome',
  templateUrl: './find-palindrome.component.html',
  styleUrls: ['./find-palindrome.component.css']
})

export class FindpalindromeComponent {
  form: FormGroup;
  submitted = false;
  serverResponse: String;

  pageURL = new FormControl('', Validators.compose([Validators.required]));

  constructor(private fP: FindPalindromeService, fb: FormBuilder) {
    this.form = fb.group({
      'pageURL': this.pageURL
    });
  }


  onSubmit(): void {
    this.submitted = true;
      this.fP.findPalindrome(this.pageURL.value)
        .subscribe(data => {
          this.serverResponse = data;
        });
    }
  }

