import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { LanguageSelection2Page } from './language-selection2.page';

describe('LanguageSelection2Page', () => {
  let component: LanguageSelection2Page;
  let fixture: ComponentFixture<LanguageSelection2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSelection2Page ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageSelection2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
