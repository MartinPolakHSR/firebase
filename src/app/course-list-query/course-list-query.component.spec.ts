import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListQueryComponent } from './course-list-query.component';

describe('CourseListQueryComponent', () => {
  let component: CourseListQueryComponent;
  let fixture: ComponentFixture<CourseListQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
