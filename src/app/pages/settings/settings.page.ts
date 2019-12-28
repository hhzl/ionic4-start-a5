import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {

 navCtrl: NavController; 
 settings: SettingsService;
 
 constructor(n: NavController, s: SettingsService) {
     this.navCtrl = n;
     this.settings = s;
 }

 ngOnInit() {
 }

 setLanguage(n) {
  console.log('settings.page: setLanguage '+ n + ' (one less)');
  this.settings.setSelectedLanguageNo(n);
  console.log('settings.page: selectedLanguage: ' + this.settings.selectedLanguage);
  this.navCtrl.navigateForward('/language-selection')
  }


}
