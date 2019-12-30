import { Component, OnInit } from '@angular/core';
import { BoxOfQuestionsService } from '../../services/box-of-questions.service';


@Component({
  selector: 'app-learn-mode',
  templateUrl: './learn-mode.page.html',
  styleUrls: ['./learn-mode.page.scss'],
})
export class LearnModePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*     let cw = {
      _id: w._id,
      picture: w.picture,
      language1: this.service.settings.language1,
      language1Label: w.en,
      language2: this.service.settings.language2,
      language2Label: w[this.service.getLanguageAbreviation(this.service.settings.language2)],
      language3: this.service.settings.language3,
      language3Label: w[this.service.getLanguageAbreviation(this.service.settings.language3)],
      audio0: 'en-' + w._id +'.mp3'   
    };

*/


}
