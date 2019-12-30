// Instructions how to configure running tests
// https://blog.oldcomputerjunk.net/2019/ng7-selective-karma/


import { TestBed } from '@angular/core/testing';

import { LWdbService } from './lwdb.service';

describe('LWdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LWdbService = TestBed.get(LWdbService);
    expect(service).toBeTruthy();
  });

  it('should be possible to name db', () => {
    const service: LWdbService = TestBed.get(LWdbService);
    service.dbName = 'user1';
    expect(service.dbName).toContain('user');
  });


  it("should support API 1", function() {
    const lwdb: LWdbService = TestBed.get(LWdbService);

// Test taken from LearnWords2, needs to be adapted.

//    expect(lwdb).toBeObject();
    
//    expect(lwdb).toHaveString("dbName");
      expect(lwdb.dbName).toBe("start-a5");

//    expect(lwdb).toHaveMethod("getSettings");
//    expect(lwdb).toHaveMethod("putSettings");

//    expect(lwdb).toHaveMethod("putWord");
//    expect(lwdb).toHaveMethod("getWord");

//    expect(lwdb).toHaveMethod("removeWords");
//    expect(lwdb).toHaveMethod("destroy");

//    expect(lwdb).toHaveMethod("persistentStorageOK");
//    expect(lwdb).toHaveMethod("isOK");
//    expect(lwdb).toHaveMethod("numberOfWords");

//    expect(lwdb).toHaveMethod("importFrom");
//    expect(lwdb).toHaveMethod("loadWords");

//    expect(lwdb).toHaveMethod("keysOfAllWords");
//    expect(lwdb).toHaveMethod("allWords");
 

  });


  it('It should have 0 elements if nothing has been imported', () => {
    const service: LWdbService = TestBed.get(LWdbService);
    service.dbName = 'user1';
    expect(service.numberOfWords()).toEqual(0);
  });





});
