import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnModeMPage } from './learn-mode-m.page';

describe('LearnModeMPage', () => {
  let component: LearnModeMPage;
  let fixture: ComponentFixture<LearnModeMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnModeMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnModeMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
