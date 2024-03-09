import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditCampDialogComponent } from './eddit-camp-dialog.component';

describe('EdditCampDialogComponent', () => {
  let component: EdditCampDialogComponent;
  let fixture: ComponentFixture<EdditCampDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdditCampDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdditCampDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
