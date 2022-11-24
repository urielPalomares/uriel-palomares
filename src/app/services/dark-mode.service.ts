import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  changeDarkMode: BehaviorSubject<any> = new BehaviorSubject(false);

  getDarkMode() {
    return localStorage.getItem('darkMode');
  }

  constructor() { }

  setDarkMode(value: boolean) {
    this.changeDarkMode.next(value);
    localStorage.setItem('darkMode', value.toString());
    if (value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
