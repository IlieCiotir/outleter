import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeMasterComponent } from './alternative-master.component';

describe('AlternativeMasterComponent', () => {
  let component: AlternativeMasterComponent;
  let fixture: ComponentFixture<AlternativeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
