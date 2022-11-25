import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditItemModalComponent } from './add-edit-item-modal.component';

describe('AddEditItemModalComponent', () => {
  let component: AddEditItemModalComponent;
  let fixture: ComponentFixture<AddEditItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
