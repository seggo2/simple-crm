import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Office1Component } from './office1.component';

describe('Office1Component', () => {
  let component: Office1Component;
  let fixture: ComponentFixture<Office1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Office1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Office1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
