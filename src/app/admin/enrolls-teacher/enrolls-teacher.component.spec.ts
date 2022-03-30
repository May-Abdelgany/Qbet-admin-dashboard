import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollsTeacherComponent } from './enrolls-teacher.component';

describe('EnrollsTeacherComponent', () => {
  let component: EnrollsTeacherComponent;
  let fixture: ComponentFixture<EnrollsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollsTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
