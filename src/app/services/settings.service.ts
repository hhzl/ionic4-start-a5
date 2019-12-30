import { Injectable } from '@angular/core';
import { LWdbService } from './lwdb.service';


@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  private selectedLanguageNo : number = 2;
  public selectedLanguage : string = 'English';

  public settings : any;
  lwdb : LWdbService;




  constructor(l : LWdbService) { 
         this.lwdb = l;
         this.settings = this.lwdb.getSettings();
}



 setUseThirdLanguage(b : boolean) {
    this.settings.useThirdLanguage = b;
    this.lwdb.putSettings(this.settings)
    console.log('settings.service useThirdLanguage was set to: ' + this.settings.useThirdLanguage);

  }



  setSelectedLanguageNo(n : number) {
    // determines which of the languages will be set by the next call to
    // setSelectedLangauge(lang)
    this.selectedLanguageNo = n;
    if (n == 1) {this.selectedLanguage = this.settings.language1};
    if (n == 2) {this.selectedLanguage = this.settings.language2};
    if (n == 3) {this.selectedLanguage = this.settings.language3};
    console.log('settings.service setSelectedLanguage: ' + n + ' ' + this.selectedLanguage);
  }



  setSelectedLanguage(lang) {
    console.log('settings.service setSelectedLanguage');
    this.selectedLanguage = lang;

    if (this.selectedLanguageNo == 1) {this.settings.language1 = lang};
    if (this.selectedLanguageNo == 2) {this.settings.language2 = lang};
    if (this.selectedLanguageNo == 3) {this.settings.language3 = lang};
 
    this.lwdb.putSettings(this.settings);

    console.log('settings.service language was set to: ' + lang + '; language: ' +this.selectedLanguage);

  }



public getLanguageList() {
   var list = this.settings.language1;
   list += ' - ' + this.settings.language2;
   if (this.settings.useThirdLanguage) {list += ' - ' + this.settings.language3};
   return list;
}




public getLanguageAbreviation(lang) {
    if (lang == 'French') {return 'fr'}
    if (lang == 'German') {return 'ge'}
    if (lang == 'Italian') {return 'it'}

    return null; 

  }

}
