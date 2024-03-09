import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CNChall2Component } from './cnchall2.component';

describe('CNChall2Component', () => {
  let component: CNChall2Component;
  let fixture: ComponentFixture<CNChall2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CNChall2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CNChall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
