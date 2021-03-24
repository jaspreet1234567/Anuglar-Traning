import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ContentComponent } from './content/content.component';
import { BackColorDirective } from './directives/back-color.directive';
import { HasPermissionDirective } from './directives/has-permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ContentComponent,
    BackColorDirective,
    HasPermissionDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
