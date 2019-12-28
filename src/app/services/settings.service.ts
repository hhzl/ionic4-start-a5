import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private selectedLanguageNo : number = 2;
  public selectedLanguage : string;
  public useThirdLanguage = false;

  public language : Array<string> = ['English','French','Italian',''];
  public languageAbreviation : Array<string> = ['en','fr','it',''];
 

  constructor() { 
    // check the following...
    var lang : string;


    if (localStorage.getItem('a5-useThirdLanguage')==null){
        localStorage.setItem('a5-useThirdLanguage',JSON.stringify(this.useThirdLanguage));
     } else {
     this.useThirdLanguage = JSON.parse(localStorage.getItem('a5-useThirdLanguage'));
     }


    if (localStorage.getItem('a5-language1')==null){
        localStorage.setItem('a5-language1',JSON.stringify(this.language[1]));
     } else {
     lang = JSON.parse(localStorage.getItem('a5-language1'));
     this.setSelectedLanguageNo(1);
     this.setSelectedLanguage(lang) 
     }

     if (localStorage.getItem('a5-language2')==null){
        localStorage.setItem('a5-language2',JSON.stringify(this.language[2]));
     } else {
     lang = JSON.parse(localStorage.getItem('a5-language2'));
     this.setSelectedLanguageNo(2);
     this.setSelectedLanguage(lang) 
     }


}


 setUseThirdLanguage(b : boolean) {
    this.useThirdLanguage = b;
    localStorage.setItem('a5-useThirdLanguage',JSON.stringify(b));

    console.log('settings.service useThirdLanguage was set to: ' + this.useThirdLanguage);

  }






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
    localStorage.setItem('a5-language'+this.selectedLanguageNo,JSON.stringify(lang));

    console.log('settings.service language was set to: ' + lang + '; language: ' +this.language);

  }





   getSelectedLanguageAbbreviation() {
    if (this.selectedLanguage == 'French') {return 'fr'}
    if (this.selectedLanguage == 'German') {return 'ge'}
    if (this.selectedLanguage == 'Italian') {return 'it'}

    return null; 

  }

}
