import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private darkModeService: DarkModeService){
    this.darkModeService.setDarkMode(this.darkModeService.getDarkMode() === 'true');
  }
}