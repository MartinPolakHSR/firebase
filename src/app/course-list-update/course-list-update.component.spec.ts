import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListUpdateComponent } from './course-list-update.component';

describe('CourseListUpdateComponent', () => {
  let component: CourseListUpdateComponent;
  let fixture: ComponentFixture<CourseListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
