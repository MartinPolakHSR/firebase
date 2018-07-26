import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {CourseService} from '../course.service';



@Component({
  selector: 'app-course-object',
  templateUrl: './course-object.component.html',
  styleUrls: ['./course-object.component.css']
})

export class CourseObjectComponent implements OnInit {

  course: Observable<any>;
  key: String;

  constructor(private courseService: CourseService) { }

  ngOnInit() {

  }


  getCourseObject(){
    this.course = this.courseService.getCourseObject(this.key).valueChanges()


  }

}
