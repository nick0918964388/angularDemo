import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolistComponent } from './wolist.component';

describe('WolistComponent', () => {
  let component: WolistComponent;
  let fixture: ComponentFixture<WolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
