import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  service : SettingsService;

  constructor(settings: SettingsService) {
                   this.service = settings;
                   console.log('home.page constructor - settings made available');
  }

}
