import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpalindromeComponent } from './find-palindrome.component';

describe('FindpalindromeComponent', () => {
  let component: FindpalindromeComponent;
  let fixture: ComponentFixture<FindpalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpalindromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
