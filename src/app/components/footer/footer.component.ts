import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isDarkmode: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.changeDarkMode.subscribe((value: boolean) => {
      this.isDarkmode = value;
    });
  }

}
