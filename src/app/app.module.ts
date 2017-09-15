import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { routing }        from './app.routes';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { LoginComponent, Youtubes } from './login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Youtubes,
    MyNewComponentComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
