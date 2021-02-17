import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPharmacyPage } from './search-pharmacy.page';

describe('SearchPharmacyPage', () => {
  let component: SearchPharmacyPage;
  let fixture: ComponentFixture<SearchPharmacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPharmacyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPharmacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
