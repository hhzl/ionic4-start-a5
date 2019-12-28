import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private selectedLanguageNo : number = 2;
  public selectedLanguage : string;


  public language : Array<string> = ['English','French','Italian',''];
  public languageAbreviation : Array<string> = ['en','fr','it',''];
 

  constructor() { }


  setSelectedLanguageNo(n : number) {
    // determines which of the languages will be set by the next call to
    // setSelectedLangauge(lang)
    this.selectedLanguageNo = n;
    this.selectedLanguage = this.language[n];
    console.log('settings.service setSelectedLanguage: ' + n + ' ' + this.selectedLanguage);
  }


  setSelectedLanguage(lang) {
    console.log('settings.service setSelectedLanguage');
    this.selectedLanguage = lang;

    this.language[this.selectedLanguageNo] = lang; 
    this.languageAbreviation[this.selectedLanguageNo] = this.getSelectedLanguageAbbreviation(); 
    localStorage.setItem('a4-language'+this.selectedLanguageNo,JSON.stringify(lang));

    console.log('settings.service language was set to: ' + lang + '; language: ' +this.language);

  }





   getSelectedLanguageAbbreviation() {
    if (this.selectedLanguage == 'French') {return 'fr'}
    if (this.selectedLanguage == 'German') {return 'ge'}
    if (this.selectedLanguage == 'Italian') {return 'it'}

    return null; 

  }

}
