import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowfComponent } from './wowf.component';

describe('WowfComponent', () => {
  let component: WowfComponent;
  let fixture: ComponentFixture<WowfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
