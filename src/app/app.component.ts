import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HospitalManagementSystem';
  someValue:string ="";
  someValues:string[] = [];
 
  CallSomeLogic(str:string) {
    this.someValues.push(str);
    this.someValue="";
  }
}