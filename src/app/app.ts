import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './Mycomponent/todos/todos';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {

  
}