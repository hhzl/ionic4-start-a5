import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { SettingsService } from '../../services/settings.service';
import { BoxOfQuestionsService } from '../../services/box-of-questions.service';

// This module treats item objects as word objects (obj.word, obj.translate);

@Component({
  selector: 'app-choose-abc',
  templateUrl: './choose-abc.page.html',
  styleUrls: ['./choose-abc.page.scss'],
})

export class ChooseAbcPage implements OnInit {


bgColorActive = 'secondary';

colorObject = {
"a" : 'secondary',
"b" : 'secondary',
"c" : 'secondary',
"d" : 'secondary',
"e" : 'secondary',
"f" : 'secondary',
"g" : 'secondary',
"h" : 'secondary',
"i" : 'secondary',
"j" : 'secondary',
"k" : 'secondary',
"l" : 'secondary',
"m" : 'secondary',
"n" : 'secondary',
"o" : 'secondary',
"p" : 'secondary',
"q" : 'secondary',
"r" : 'secondary',
"s" : 'secondary',
"t" : 'secondary',
"u" : 'secondary',
"v" : 'secondary',
"w" : 'secondary',
"x" : 'secondary',
"y" : 'secondary',
"z" : 'secondary'
};


jumpTable = {
"a" : -1,
"b" : -1,
"c" : -1,
"d" : -1,
"e" : -1,
"f" : -1,
"g" : -1,
"h" : -1,
"i" : -1,
"j" : -1,
"k" : -1,
"l" : -1,
"m" : -1,
"n" : -1,
"o" : -1,
"p" : -1,
"q" : -1,
"r" : -1,
"s" : -1,
"t" : -1,
"u" : -1,
"v" : -1,
"w" : -1,
"x" : -1,
"y" : -1,
"z" : -1
};


settings: SettingsService;
service: BoxOfQuestionsService;
navCtrl : NavController;
secondLanguageAbrev : any; // note not a string

constructor(public n: NavController, box: BoxOfQuestionsService, s: SettingsService) {
     this.navCtrl = n;
     this.service = box;
     this.settings = s;

     this.secondLanguageAbrev = this.settings.getLanguageAbreviation(this.settings.settings.language2);

     // reset mode to linear
     this.service.mode = 'linear';

  // document.getElementById('z').bgColor = '#ff0000';

      

  // loop through all entries, get the first letter and set the color object to primary.   

     this.initializeColorObject();
     this.initializeJumpTable();

     // color="{{post.color}}"

 }




initializeColorObject() { 

var words = this.service.getSelectedItems();
var word : string;
var letter : string;
var s : any;
var wordInSelectedLanguage : string;
var lang2Abrev = this.secondLanguageAbrev;
console.log('choose-mode: initializeColorObject, lang2Abrev =  ' + lang2Abrev);

for (s of words) {
  // console.log(s);
  // some word objects have s.word containing the english value, some have s.en

  if (s.en) { word = s.en; 
              wordInSelectedLanguage = s[lang2Abrev];
            } 
  else {word = s.word; 
       if (lang2Abrev == 'ge')  {wordInSelectedLanguage = s.translate};
       if (lang2Abrev == 'fr')  {wordInSelectedLanguage = s.translateFR};
       if (lang2Abrev == 'it')  {wordInSelectedLanguage = s.translateIT};
  };

  letter = word.charAt(0) ;
  letter = letter.toLowerCase();

  

   // console.log('initializeColorObject: ' + letter + '  ' + wordInSelectedLanguage);

if (wordInSelectedLanguage == '') {  // keep the initialization value which is 'secondary'
   }
   else 
      {this.colorObject[letter] = 'primary'}
 }


}


ngOnInit() {
}


goToLetter(letter) {
   console.log('goToLetter(' + letter +')');
   this.service.mode = 'linear';
   var i = this.jumpTable[letter];
   if (i > -1) {  this.service.setSelectedIndex(i);
                  console.log('navigate to letter : ' + letter + '; index i = ' + i);           
                  this.navCtrl.navigateForward('/picture-with-labels');
   } else {console.log('No entry with : ' + letter)};
}

   

learnmodeShortWords(numberOfLetters){ 
   console.log('learn mode short words: this.service.mode');
   this.service.numberOfLetters = numberOfLetters;
   this.service.mode = 'shortwords';
   this.navCtrl.navigateForward('/picture-with-labels')
}


initializeJumpTable() {
var words = this.service.getSelectedItems(); // treat items as word objects
var lang2Abrev = this.secondLanguageAbrev;
var wordInSelectedLanguage : string;
var letter : string;
var wobj : any; // a word object
var s : string;
var i : number;
var numberOfEntries;
i = 0;
var word : String;

numberOfEntries = words.length;
console.log('choose-mode: initializeJumpTable');
console.log('lang2Abrev = ' + lang2Abrev);

for (wobj of words) {

// console.log('wobj.en = ' + wobj.en);
  if (wobj.en) { word = wobj.en; 
                 wordInSelectedLanguage = wobj[lang2Abrev];
                 // console.log('word = ' + word + '   wordInSelectedLanguage ' + wordInSelectedLanguage);
            } 
  else {word = wobj.word; 
       if (lang2Abrev == 'ge')  {wordInSelectedLanguage = wobj.translate};
       if (lang2Abrev == 'fr')  {wordInSelectedLanguage = wobj.translateFR};
       if (lang2Abrev == 'it')  {wordInSelectedLanguage = wobj.translateIT};
  };



//  console.log('word = ' + word + ';  wordInSelectedLanguage = ' + wordInSelectedLanguage);



  letter = word.charAt(0) ;
  letter = letter.toLowerCase();

   // REFINE the following condition; the case where the first word of a letter had no
   // wordInSelectedLanguage in not captured.
 
   if (wordInSelectedLanguage == '') {  // do not change value
                                        // it may be the initialization value which is -1
                                        // or a letter jump value set earlier.
        }
   else {  // only set jump index for letter if it has not been done yet.
           if (this.jumpTable[letter] == -1) {this.jumpTable[letter] = i;
                // console.log('initializeJumpTable ' + letter + ':' + i +':' +word ); 
              }
        }
i = i + 1; 


}


console.log('initializeJumpTable -- done');
}


}
