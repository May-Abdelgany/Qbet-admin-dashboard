import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcqQuestionsComponent } from './dmcq-questions.component';

describe('DmcqQuestionsComponent', () => {
  let component: DmcqQuestionsComponent;
  let fixture: ComponentFixture<DmcqQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmcqQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcqQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
