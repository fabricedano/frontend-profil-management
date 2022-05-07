import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittypeuserComponent } from './addedittypeuser.component';

describe('AddedittypeuserComponent', () => {
  let component: AddedittypeuserComponent;
  let fixture: ComponentFixture<AddedittypeuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedittypeuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittypeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
