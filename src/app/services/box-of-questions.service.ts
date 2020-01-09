import { Injectable } from '@angular/core';
import { LWdbService } from './lwdb.service';
import { DataService } from './data.service';
import { SettingsService } from './settings.service';


@Injectable({
  providedIn: 'root'
})

export class BoxOfQuestionsService {

  private testFlag : number = 0;

  lwDB : LWdbService;
  service : SettingsService;
  numberOfLetters : number = 5;

  private selectedIndex : number = 0;
  private selectedItems : Array<any>;

  private numberOfItems: number;

  mode : string = 'linear';   // shortwords, smallSelection, learnmode, practicemode




  constructor(lwDBservice: LWdbService, d : DataService, s : SettingsService) { 
     // initialize selectedItems to all items available
     this.selectedItems = d.items;
     this.service = s;
     this.lwDB = lwDBservice; 
  }  




  getSelectedItems() {
    return this.selectedItems;
  }






  nextItem() {
    if (this.testFlag == 1) {console.log('nextItem');}; 
    this.selectedIndex = this.selectedIndex + 1;
    var n = this.selectedItems.length;
    if (this.selectedIndex == n) {this.selectedIndex = 0};
    return this.currentItem(); 
  }



  prevItem() {
    if (this.testFlag == 1) {console.log('prevItem');}; 
    this.selectedIndex = this.selectedIndex - 1;
    var n = this.selectedItems.length;
    if (this.selectedIndex == -1) {this.selectedIndex = n -1};
    return this.currentItem(); 
  }


  setSelectedIndex(n : number) {
    this.selectedIndex = n;
  }







  currentItem() {
    var item = this.selectedItems[this.selectedIndex]; 
    if (this.testFlag == 1) {console.log('box-of-questions.service : ' + this.selectedIndex + ' : ' + item.en)}; 
    
    if (this.testFlag == 1) {console.log(item)};
    return item; 
  }


  getRandomItem(){
                return this.selectedItems[this._getRandomInt(0,this.selectedItems.length-1)];
  };




  _getRandomInt(min, max){
             // Returns a random integer between min (inclusive) and max (inclusive)
             // Using Math.round() will give you a non-uniform distribution!
             
    		return Math.floor(Math.random() * (max - min + 1)) + min;
  };



  // randomize was called _shuffle before
  _randomize(arr : Array<any>) {
		    var j, x, i;
		    for (i = arr.length; i; i--) {
		        j = Math.floor(Math.random() * i);
		        x = arr[i - 1];
		        arr[i - 1] = arr[j];
		        arr[j] = x;
		    }
                    return arr;		   
	};





}
