import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CourseListComponent} from './course-list/course-list.component';
import {CourseObjectComponent} from "./course-object/course-object.component";
import {CourseListPushComponent} from './course-list-push/course-list-push.component';
import {CourseListRemoveComponent} from "./course-list-remove/course-list-remove.component";
import {CourseListUpdateComponent} from "./course-list-update/course-list-update.component";
import { CourseObjectCreateComponent } from './course-object-create/course-object-create.component';
import { CourseObjectUpdateComponent } from './course-object-update/course-object-update.component';
import { CourseObjectDeleteComponent } from './course-object-delete/course-object-delete.component';
import { CourseListQueryComponent } from './course-list-query/course-list-query.component';


const routes: Routes = [
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-object', component: CourseObjectComponent },
  { path: 'course-list-push', component: CourseListPushComponent },
  { path: 'course-list-remove', component: CourseListRemoveComponent },
  { path: 'course-list-update', component: CourseListUpdateComponent },
  { path: 'course-object-create', component: CourseObjectCreateComponent },
  { path: 'course-object-update', component: CourseObjectUpdateComponent },
  { path: 'course-object-delete', component: CourseObjectDeleteComponent },
  { path: 'course-list-query', component: CourseListQueryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
