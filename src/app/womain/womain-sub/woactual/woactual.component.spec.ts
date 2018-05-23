import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoactualComponent } from './woactual.component';

describe('WoactualComponent', () => {
  let component: WoactualComponent;
  let fixture: ComponentFixture<WoactualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoactualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
