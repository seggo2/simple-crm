import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditAdressDialogComponent } from './eddit-adress-dialog.component';

describe('EdditAdressDialogComponent', () => {
  let component: EdditAdressDialogComponent;
  let fixture: ComponentFixture<EdditAdressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdditAdressDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdditAdressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
