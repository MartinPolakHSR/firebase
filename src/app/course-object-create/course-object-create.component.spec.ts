import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseObjectCreateComponent } from './course-object-create.component';

describe('CourseObjectCreateComponent', () => {
  let component: CourseObjectCreateComponent;
  let fixture: ComponentFixture<CourseObjectCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseObjectCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseObjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
