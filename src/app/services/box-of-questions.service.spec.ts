import { TestBed } from '@angular/core/testing';

import { BoxOfQuestionsService } from './box-of-questions.service';

describe('BoxOfQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxOfQuestionsService = TestBed.get(BoxOfQuestionsService);
    expect(service).toBeTruthy();
  });
});
