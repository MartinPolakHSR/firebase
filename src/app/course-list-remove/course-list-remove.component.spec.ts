import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListRemoveComponent } from './course-list-remove.component';

describe('CourseListRemoveComponent', () => {
  let component: CourseListRemoveComponent;
  let fixture: ComponentFixture<CourseListRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
