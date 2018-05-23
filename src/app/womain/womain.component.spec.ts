import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomainComponent } from './womain.component';

describe('WomainComponent', () => {
  let component: WomainComponent;
  let fixture: ComponentFixture<WomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
