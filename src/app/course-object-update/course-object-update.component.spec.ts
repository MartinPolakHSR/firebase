import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseObjectUpdateComponent } from './course-object-update.component';

describe('CourseObjectUpdateComponent', () => {
  let component: CourseObjectUpdateComponent;
  let fixture: ComponentFixture<CourseObjectUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseObjectUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseObjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
