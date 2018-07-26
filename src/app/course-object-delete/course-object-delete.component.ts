import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-course-object-delete',
  templateUrl: './course-object-delete.component.html',
  styleUrls: ['./course-object-delete.component.css']
})
export class CourseObjectDeleteComponent implements OnInit {

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
      console.log(this.courses)
    });

  }

  removeCourseObject(){
    this.courseService.removeCourseObject(this.toRemoveCourse);
  }




}
