import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { ChooseAbcPage } from './choose-abc.page';

describe('ChooseAbcPage', () => {
  let component: ChooseAbcPage;
  let fixture: ComponentFixture<ChooseAbcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAbcPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseAbcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
