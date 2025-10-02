import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './Mycomponent/todos/todos';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {

  
}