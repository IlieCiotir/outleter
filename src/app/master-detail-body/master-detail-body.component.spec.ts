import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailBodyComponent } from './master-detail-body.component';

describe('MasterDetailBodyComponent', () => {
  let component: MasterDetailBodyComponent;
  let fixture: ComponentFixture<MasterDetailBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterDetailBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDetailBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
