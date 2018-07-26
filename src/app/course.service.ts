import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "angularfire2/database";
import {Observable} from "rxjs/index";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private dbListPath = '/courses';

  coursesRef: AngularFireList<Course> = null;
  courseRef: AngularFireObject<Course> = null;


  constructor(private db: AngularFireDatabase){};



  getCourseObject(key): AngularFireObject<Course> {
    const dbObjectPath = '/courses/'+ key;
    return this.courseRef = this.db.object<Course>(dbObjectPath)
  }

  createCourseObject(newKey, newCourse){
    const courseRef = this.db.object('courses/'+newKey);
    courseRef.set({ description: newCourse})
      .then(
        () => console.log('Object Create done'),
        console.error
      )
  }
  updateCourseObject(key, newCourse){
    const courseRef = this.db.object('courses/'+key);
    courseRef.update({ description: newCourse})
      .then(
        () => console.log('Object Update done'),
        console.error
      )
  }

  removeCourseObject(key){
    const courseRef = this.db.object('courses/'+key);
    courseRef.remove()
      .then(
        () => console.log('Object Remove done'),
        console.error
      )
  }




  getCourseList(): AngularFireList<Course> {
    return  this.coursesRef = this.db.list<Course>(this.dbListPath);
  }


  pushCourse(newValue) {
    const coursesRef = this.db.list('courses');
    coursesRef.push({description:newValue})
      .then(
        () => console.log('List Push done'),
        console.error
      )
  }

  removeCourse(toRemoveCourse) {
    const coursesRef = this.db.list('courses');
    coursesRef.remove(toRemoveCourse)
      .then(
        () => console.log('List Remove done'),
        console.error
      )

  }

  updateCourse(toUpdateCourse, newValue) {
    const coursesRef = this.db.list('courses');
    coursesRef.update(toUpdateCourse,{description:newValue})
      .then(
        () => console.log('List Update done'),
        console.error
      )

  }


  getCourseListQuery(): AngularFireList<Course> {
    const coursesRef = this.db.list<Course>(this.dbListPath,
        ref => ref.orderByChild('url')
    )

    return coursesRef;
  }


  private handleError(error) {
    console.log(error);
  }


}
