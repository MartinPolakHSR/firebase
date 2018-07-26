import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-course-list-push',
  templateUrl: './course-list-push.component.html',
  styleUrls: ['./course-list-push.component.css']
})
export class CourseListPushComponent implements OnInit {

  courses: Observable<any>;
  newCourse: String;

  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {

    this.courses = this.courseService.getCourseList().valueChanges();

  }

  pushCourse() {
    this.courseService.pushCourse(this.newCourse);
  }

}


