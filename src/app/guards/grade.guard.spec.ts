import { TestBed } from '@angular/core/testing';

import { GradeGuard } from './grade.guard';

describe('GradeGuard', () => {
  let guard: GradeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GradeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
