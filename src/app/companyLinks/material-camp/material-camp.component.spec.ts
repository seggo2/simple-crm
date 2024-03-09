import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCampComponent } from './material-camp.component';

describe('MaterialCampComponent', () => {
  let component: MaterialCampComponent;
  let fixture: ComponentFixture<MaterialCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
