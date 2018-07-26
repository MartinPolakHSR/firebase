import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-course-list-remove',
  templateUrl: './course-list-remove.component.html',
  styleUrls: ['./course-list-remove.component.css']
})
export class CourseListRemoveComponent implements OnInit {

  courses: any;
  toRemoveCourse: String;

  constructor(private courseService: CourseService) { }


  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {


    // Use snapshotChanges().map() to store the key
    this.courseService.getCourseList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(courses => {
      this.courses = courses;
    });

  }

  removeCourse(){
    this.courseService.removeCourse(this.toRemoveCourse);
  }




}


