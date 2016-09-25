import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>This text is in parent component</h1>
             <br>
             <br>
             <app-child-component></app-child-component>`,
  styleUrls: ['app.component.css']
})
export class AppComponent { }
