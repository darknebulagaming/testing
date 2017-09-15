import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  shadowStyle = {'box-shadow': '10px 10px 500px rgba(0, 0, 0, .5)'};
  loginTry = false;
  preRolling = false;
  rolling = false;
  test= false;
  position='right';
  timeout : any;
  cards=[1,2,3,4,5];
  password;
  constructor(
    private snackBar: MdSnackBar,
    ) 
  { }

  ngOnInit() {


  }

login(){
  if(this.password == 'admin'){
    this.test = true;
  }
  else if(!this.loginTry && !this.preRolling){
    this.loginTry = true;
  this.snackBar.open('Invalid Login Credentials', 'Try Again', {
    duration: 3000
  });
} else if(this.loginTry && !this.preRolling) {
  this.preRolling = true;
  this.snackBar.open('Just kidding, you can\'t log in yet', 'ಠ_ಠ', {
    duration: 3000
  });
} else{
  this.rolling = true;
  this.timeout = setTimeout(() => {
    this.rolling = false;
    this.preRolling = false;
    this.loginTry = false;
    }, 212000);
 }
}

reset(){
  clearTimeout(this.timeout);
  this.rolling = false;
  this.preRolling = false;
  this.loginTry = false;
  this.test = false;
}


mouseMove(event) {
  let yVal = -1 * (event.screenY - (event.view.window.innerHeight/2)) / 10;
  let xVal = -1 * (event.screenX - (event.view.window.innerWidth/2)) / 10;
  let spread = Math.abs(yVal) + Math.abs(xVal)/100;
  this.shadowStyle = {
    'box-shadow': xVal + 'px ' + yVal + 'px 500px ' + spread + 'px rgba(0, 0, 0, .5)'};
}

}


import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'youtube',
  template: `    
    <iframe width="100%" height="100%" [src]="url" frameborder="0" allowfullscreen></iframe>
  `,
})
export class Youtubes {
  url:any;
  name:string;
  video: any = {id: 'dQw4w9WgXcQ?autoplay=1'};
  baseUrl:string = 'https://www.youtube.com/embed/';
  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
  }
}