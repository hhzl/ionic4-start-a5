import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

  it('should have English as default', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
    expect(service.language[0]).toBe('English');
  });

  it('should be possible to set language number 1', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    let oldValue = service.language[1];

    service.setSelectedLanguageNo(1);
    service.setSelectedLanguage('German');
    expect(service.language[1]).toBe('German');

    service.setSelectedLanguage(oldValue);
  });


  it('should be possible to set language number 2', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    let oldValue = service.language[2];

    service.setSelectedLanguageNo(2);
    service.setSelectedLanguage('French');
    expect(service.language[2]).toBe('French');

    service.setSelectedLanguage(oldValue);
  });


});
