import { TestBed } from '@angular/core/testing';

import { BoxOfQuestionsService } from './box-of-questions.service';

describe('BoxOfQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    expect(service).toBeTruthy();
  });


  it('should have an array of selected items.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);

    expect(Array.isArray(service.getSelectedItems())).toBeTruthy();
    expect(service.getSelectedItems().length).toBeGreaterThan(0);
  });



  it('Items should have properties _id and tags', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    var min = 0;
    var max = service.getSelectedItems().length -1;
    var i = Math.floor(Math.random() * (max - min + 1)) + min;
    var item = service.getSelectedItems()[i];

    expect(item._id).toBeTruthy();
    expect(item.tags).toBeTruthy();
  });


  it('should allow to navigate around the items limit.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    service.nextItem();
    service.nextItem();
    var item = service.currentItem();

    expect(service.getSelectedItems().length).toBe(6);

    service.prevItem();
    service.prevItem();
    service.prevItem();
    service.prevItem();
    service.prevItem();
    service.prevItem();

    var item2 = service.currentItem();
    expect(item._id == item2._id).toBeTruthy();


  });



  it('should allow to navigate forth and back.', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    service.nextItem();
    service.nextItem();
    var item = service.currentItem();

    service.nextItem();
    service.nextItem();

    service.prevItem();
    service.prevItem();

    var item2 = service.currentItem();
    expect(item._id == item2._id).toBeTruthy();


  });




});
