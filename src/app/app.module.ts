import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";


import { AppComponent } from './app.component';
import {environment} from '../environments/environment';

import { CourseListComponent } from './course-list/course-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { CourseObjectComponent } from './course-object/course-object.component';
import { CourseListUpdateComponent } from './course-list-update/course-list-update.component';
import { CourseListPushComponent } from './course-list-push/course-list-push.component';
import { CourseListRemoveComponent } from './course-list-remove/course-list-remove.component';
import { CourseObjectCreateComponent } from './course-object-create/course-object-create.component';
import { CourseObjectUpdateComponent } from './course-object-update/course-object-update.component';
import { CourseObjectDeleteComponent } from './course-object-delete/course-object-delete.component';
import { CourseListQueryComponent } from './course-list-query/course-list-query.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseObjectComponent,
    CourseListUpdateComponent,
    CourseListPushComponent,
    CourseListRemoveComponent,
    CourseObjectCreateComponent,
    CourseObjectUpdateComponent,
    CourseObjectDeleteComponent,
    CourseListQueryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
