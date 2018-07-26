import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListPushComponent } from './course-list-push.component';

describe('CourseListPushComponent', () => {
  let component: CourseListPushComponent;
  let fixture: ComponentFixture<CourseListPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
