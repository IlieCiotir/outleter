import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultMasterComponent } from './default-master.component';

describe('DefaultMasterComponent', () => {
  let component: DefaultMasterComponent;
  let fixture: ComponentFixture<DefaultMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
