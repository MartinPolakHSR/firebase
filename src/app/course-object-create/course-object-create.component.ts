import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-course-object-create',
  templateUrl: './course-object-create.component.html',
  styleUrls: ['./course-object-create.component.css']
})
export class CourseObjectCreateComponent implements OnInit {

  courses: Observable<any>;
  newCourse: String;
  newKey: String;

  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {

    this.courses = this.courseService.getCourseList().valueChanges();

  }

  createCourseObject(){
    this.courseService.createCourseObject(this.newKey, this.newCourse);
  }

}
