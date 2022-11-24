import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  isDarkmode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.changeDarkMode.subscribe((value: boolean) => {
      this.isDarkmode = value;
    });
  }
}

