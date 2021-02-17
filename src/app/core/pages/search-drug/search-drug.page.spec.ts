import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchDrugPage } from './search-drug.page';

describe('SearchDrugPage', () => {
  let component: SearchDrugPage;
  let fixture: ComponentFixture<SearchDrugPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDrugPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDrugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
