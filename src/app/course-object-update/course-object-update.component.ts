import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-course-object-update',
  templateUrl: './course-object-update.component.html',
  styleUrls: ['./course-object-update.component.css']
})
export class CourseObjectUpdateComponent implements OnInit {

  courses: any;
  toUpdateCourse: String;
  newValue: String;

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

  updateCourseObject(){
    this.courseService.updateCourseObject(this.toUpdateCourse,this.newValue);
  }




}
