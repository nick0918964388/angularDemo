import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomainInfoComponent } from './womain-info.component';

describe('WomainInfoComponent', () => {
  let component: WomainInfoComponent;
  let fixture: ComponentFixture<WomainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
