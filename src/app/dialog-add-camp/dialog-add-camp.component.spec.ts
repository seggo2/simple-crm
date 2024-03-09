import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCampComponent } from './dialog-add-camp.component';

describe('DialogAddCampComponent', () => {
  let component: DialogAddCampComponent;
  let fixture: ComponentFixture<DialogAddCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
