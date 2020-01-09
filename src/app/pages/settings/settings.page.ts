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
 service: SettingsService;
 useThirdLanguageCheckBox = false;

 constructor(n: NavController, s: SettingsService) {
     this.navCtrl = n;
     this.service = s;
     this.useThirdLanguageCheckBox = this.service.settings.useThirdLanguage;
     console.log('constructor settings-page this.useThirdLanguageCheckBox =' + this.useThirdLanguageCheckBox);

 }

 ngOnInit() {
 }

 setLanguage(n) {
  console.log('settings.page: setLanguage '+ n + ' (one less)');
  this.service.setSelectedLanguageNo(n);
  console.log('settings.page: selectedLanguage: ' + this.service.selectedLanguage);
  this.navCtrl.navigateForward('/language-selection2')
 }


 useThirdLanguage(e): void {
  	console.log('settings-page ' + e.currentTarget.checked);	
        this.service.setUseThirdLanguage(e.currentTarget.checked);
        this.useThirdLanguageCheckBox = e.currentTarget.checked;
 }



}
