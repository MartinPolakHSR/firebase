import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Observable} from "rxjs/index";


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Observable<any>;

  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {

    this.courses = this.courseService.getCourseList().valueChanges();

  }

}
