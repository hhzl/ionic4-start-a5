import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { ChooseModeMPage } from './choose-mode-m.page';

describe('ChooseModeMPage', () => {
  let component: ChooseModeMPage;
  let fixture: ComponentFixture<ChooseModeMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseModeMPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseModeMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
