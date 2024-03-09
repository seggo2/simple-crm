import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNChall1Component } from './cnchall1.component';

describe('CNChall1Component', () => {
  let component: CNChall1Component;
  let fixture: ComponentFixture<CNChall1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNChall1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CNChall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
