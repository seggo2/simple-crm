import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditUserDialogComponent } from './eddit-user-dialog.component';

describe('EdditUserDialogComponent', () => {
  let component: EdditUserDialogComponent;
  let fixture: ComponentFixture<EdditUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdditUserDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
