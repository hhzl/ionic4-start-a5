import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseModeMPage } from './choose-mode-m.page';

describe('ChooseModeMPage', () => {
  let component: ChooseModeMPage;
  let fixture: ComponentFixture<ChooseModeMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseModeMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseModeMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
