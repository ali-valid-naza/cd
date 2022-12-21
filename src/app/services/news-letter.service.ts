import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class NewsLetterService {

  constructor() { }

  subscribe(email: any) {
    console.log(email);
  }
}
