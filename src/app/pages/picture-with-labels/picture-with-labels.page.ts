import { Component, OnInit } from '@angular/core';
import { BoxOfQuestionsService } from '../../services/box-of-questions.service';
import { SettingsService } from '../../services/settings.service';

declare var LWutils: any;

@Component({
  selector: 'app-picture-with-labels',
  templateUrl: './picture-with-labels.page.html',
  styleUrls: ['./picture-with-labels.page.scss'],
})


export class PictureWithLabelsPage implements OnInit {
// the items obtained from BoxOfQuestions are treated as word objects in this class.
// (BoxOfQuestions deals with 'items')
// LWutils serves as a demonstration how to use a JavaScript library.
// LWutils needs to be added to index.html

  word: string;
  wordId : number;
  translate : string = "...";
  translate3 : string = "... 3";

  itemImageFileName : string ; 
  itemImageUrlPath: string = 'assets/data/pictures/';

  itemAudioFileName : string ;
  itemAudioUrlPath: string = 'assets/data/audio/';


  box: BoxOfQuestionsService;
  service: SettingsService;

  constructor(b: BoxOfQuestionsService, s: SettingsService) {
                   this.box = b;
                   this.service = s;
                   var w = this.box.currentItem();
                   this.displayWord(w);       
  }

  ngOnInit() {
  }





 displayWord(item){
 // this method needs to be adapted for other data formats.
 // detect the format and adapt.

       this.word = item.word;
       this.wordId = item._id;
       console.log('picture-with-labels.page : displayWord = ' + this.word);

       if (this.service.settings.language2 == 'French' ) { 
           this.translate = item.translateFR;
       }

       if (this.service.settings.language2 == 'Italian' ) { 
           this.translate = item.translateIT;
       }

       if (this.service.settings.language2 == 'German' ) { 
           this.translate = item.translate;  // not translateGE
       }

       this.translate3 = '';
      
       if (this.service.settings.useThirdLanguage) { 

       if (this.service.settings.language3 == 'French' ) { 
           this.translate3 = item.translateFR;
       }

       if (this.service.settings.language3 == 'Italian' ) { 
           this.translate3 = item.translateIT;
       }

       if (this.service.settings.language3 == 'German' ) { 
           this.translate3 = item.translate;  // not translateGE
       }
       }

       this.itemImageFileName = item.picture;
       console.log(this.itemImageFileName);

       // adapt if necessary
       this.itemAudioFileName = item.audio;
       // this.itemAudioFileName = 'en-' + this.wordId+'.mp3'; 
       
  }






nextWord() {
       console.log('picture-with-labels.page : nextWord');
       var w = this.box.nextItem();
       this.displayWord(w);
}


prevWord() {
       var w = this.box.prevItem();
       this.displayWord(w);
 }



listen() 
  {

    var hasPlayed = LWutils.playAudio(this.itemAudioUrlPath+this.itemAudioFileName);

    hasPlayed.addEventListener("ended", function() {
      console.log('sound played!');
    });
  }



}
