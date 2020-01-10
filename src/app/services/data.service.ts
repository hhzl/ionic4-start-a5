import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

public items :  Array<any> = [
   {
      "_id":5,
      "word":"butterfly",
      "translate":"der Schmetterling",
      "translateFR":"le papillon",
      "translateIT":"la farfalla",
      "tags":"animal",
      "picture":"butterfly.jpg",
      "audio":"En-uk-a_butterfly.ogg.mp3"
   },
   {
      "_id":8,
      "word":"cat",
      "translate":"die Katze",
      "translateFR":"le chat",
      "translateIT":"il gatto",
      "tags":"animal",
      "picture":"cat.jpg",
      "audio":"En-uk-a_cat.ogg.mp3"
   },
   {
      "_id":12,
      "word":"dog",
      "translate":"der Hund",
      "translateFR":"le chien",
      "translateIT":"il cane",
      "tags":"animal",
      "picture":"dog.jpg",
      "audio":"En-uk-a_dog.ogg.mp3"
   },
   {
      "_id":18,
      "word":"fish",
      "translate":"der Fisch",
      "translateFR":"le poisson",
      "translateIT":"il pesce",
      "tags":"animal",
      "picture":"fish.jpg",
      "audio":"En-uk-fish.ogg.mp3"
   },
   {
      "_id":20,
      "word":"grasshopper",
      "translate":"die Heuschrecke",
      "translateFR":"la sauterelle",
      "translateIT":"la saltabecca",
      "tags":"animal",
      "picture":"grasshopper.jpg",
      "audio":"En-uk-grasshopper.ogg.mp3"
   },
   {
      "_id":35,
      "word":"sheep",
      "translate":"das Schaf",
      "translateFR":"le mouton",
      "translateIT":"l'ovino m.",
      "tags":"animal",
      "picture":"sheep.jpg",
      "audio":"En-uk-a_sheep.ogg.mp3"
   }
];


  constructor() { }
}
