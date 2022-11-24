import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDarkmode: boolean = false;
  lenguajes: any[] = [
    { value: 'es', viewValue: 'Español (MX)' },
    { value: 'en', viewValue: 'English (US)' },
  ];
  selectedLang = this.lenguajes[0].value;

  constructor(private translate: TranslateService,
    private darkModeService: DarkModeService) {
    this.darkModeService.changeDarkMode.subscribe((value: boolean) => {
      this.isDarkmode = value;
    });
  }

  setDarkMode(value: boolean) {
    this.darkModeService.setDarkMode(value);
  }

  changeLenguaje(event: Event) {
    this.translate.use((event.target as HTMLSelectElement).value);
  }
}
