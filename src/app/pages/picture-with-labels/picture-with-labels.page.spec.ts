import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';


import { PictureWithLabelsPage } from './picture-with-labels.page';

describe('PictureWithLabelsPage', () => {
  let component: PictureWithLabelsPage;
  let fixture: ComponentFixture<PictureWithLabelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureWithLabelsPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PictureWithLabelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
