import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Observable} from "rxjs/index";


@Component({
  selector: 'app-course-list-query',
  templateUrl: './course-list-query.component.html',
  styleUrls: ['./course-list-query.component.css']
})
export class CourseListQueryComponent implements OnInit {
  courses: Observable<any>;

  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {

    this.courses = this.courseService.getCourseListQuery().valueChanges();

  }

}
