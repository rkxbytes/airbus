import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookFlightPage } from './book-flight.page';

describe('BookFlightPage', () => {
  let component: BookFlightPage;
  let fixture: ComponentFixture<BookFlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
