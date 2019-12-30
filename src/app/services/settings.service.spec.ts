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
    expect(service.settings.language1).toBe('English');
  });

  it('should be possible to set language number 2', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    let oldValue = service.settings.language2;

    service.setSelectedLanguageNo(2);
    service.setSelectedLanguage('German');
    expect(service.settings.language2).toBe('German');

    service.setSelectedLanguage(oldValue);
  });


  it('should be possible to set language number 3', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    let oldValue = service.settings.language3;

    service.setSelectedLanguageNo(3);
    service.setSelectedLanguage('Chinese');
    expect(service.settings.language3).toBe('Chinese');

    service.setSelectedLanguage(oldValue);
  });


});
