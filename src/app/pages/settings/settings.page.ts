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
 useThirdLanguageCheckBox = false;

 constructor(n: NavController, s: SettingsService) {
     this.navCtrl = n;
     this.settings = s;
     this.useThirdLanguageCheckBox = this.settings.useThirdLanguage;
     console.log('constructor settings-page this.useThirdLanguageCheckBox =' + this.useThirdLanguageCheckBox);

 }

 ngOnInit() {
 }

 setLanguage(n) {
  console.log('settings.page: setLanguage '+ n + ' (one less)');
  this.settings.setSelectedLanguageNo(n);
  console.log('settings.page: selectedLanguage: ' + this.settings.selectedLanguage);
  this.navCtrl.navigateForward('/language-selection')
 }


 useThirdLanguage(e): void {
  	console.log('settings-page ' + e.currentTarget.checked);	
        this.settings.setUseThirdLanguage(e.currentTarget.checked);
        this.useThirdLanguageCheckBox = e.currentTarget.checked;
 }



}
