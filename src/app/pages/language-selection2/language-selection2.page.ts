import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-language-selection2',
  templateUrl: './language-selection2.page.html',
  styleUrls: ['./language-selection2.page.scss'],
})
export class LanguageSelection2Page implements OnInit {

  selectedRadio : string = 'German';
  service: SettingsService;

  constructor(settings: SettingsService) {
        this.service = settings;                                 
     	this.selectedRadio   = this.service.selectedLanguage;
        console.log('language-selection - constructor ' + ' ' + this.service.selectedLanguage);
        console.log('this.selectedRadio  =' + this.selectedRadio)
  }


  ngOnInit() {
  }


  onChangeHandler($event) {
    this.selectedRadio = $event.target.value;
    this.service.setSelectedLanguage(this.selectedRadio);
  }


}
