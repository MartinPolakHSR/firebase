import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {map} from "rxjs/internal/operators";

@Component({
  selector: 'app-course-list-update',
  templateUrl: './course-list-update.component.html',
  styleUrls: ['./course-list-update.component.css']
})
export class CourseListUpdateComponent implements OnInit {

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

  updateCourse(){
    this.courseService.updateCourse(this.toUpdateCourse,this.newValue);
  }




}
