import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabataPage } from './tabata.page';

describe('TabataPage', () => {
  let component: TabataPage;
  let fixture: ComponentFixture<TabataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
