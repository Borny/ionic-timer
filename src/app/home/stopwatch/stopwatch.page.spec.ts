import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StopwatchPage } from './stopwatch.page';

describe('StopwatchPage', () => {
  let component: StopwatchPage;
  let fixture: ComponentFixture<StopwatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StopwatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
