import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNChall3Component } from './cnchall3.component';

describe('CNChall3Component', () => {
  let component: CNChall3Component;
  let fixture: ComponentFixture<CNChall3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNChall3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CNChall3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
