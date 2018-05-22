import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeDetailComponent } from './alternative-detail.component';

describe('AlternativeDetailComponent', () => {
  let component: AlternativeDetailComponent;
  let fixture: ComponentFixture<AlternativeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
