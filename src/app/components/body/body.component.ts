import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  isDarkmode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.changeDarkMode.subscribe((value: boolean) => {
      this.isDarkmode = value;
    });
  }
}
