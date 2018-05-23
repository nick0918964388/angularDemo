import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoplanComponent } from './woplan.component';

describe('WoplanComponent', () => {
  let component: WoplanComponent;
  let fixture: ComponentFixture<WoplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
