import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseObjectDeleteComponent } from './course-object-delete.component';

describe('CourseObjectDeleteComponent', () => {
  let component: CourseObjectDeleteComponent;
  let fixture: ComponentFixture<CourseObjectDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseObjectDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseObjectDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
