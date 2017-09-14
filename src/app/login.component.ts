import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  shadowStyle = {'box-shadow': '10px 10px 500px rgba(0, 0, 0, .5)'};
  constructor() 
  { }

  ngOnInit() {


  }




mouseMove(event) {
  let yVal = -1 * (event.screenY - (event.view.window.innerHeight/2)) / 10;
  let xVal = -1 * (event.screenX - (event.view.window.innerWidth/2)) / 10;
  let spread = Math.abs(yVal) + Math.abs(xVal)/100;
  this.shadowStyle = {
    'box-shadow': xVal + 'px ' + yVal + 'px 500px ' + spread + 'px rgba(0, 0, 0, .5)'};
}

}
