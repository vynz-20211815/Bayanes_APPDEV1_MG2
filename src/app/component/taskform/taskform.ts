import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/taskservice';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './taskform.html',
  styleUrl: './taskform.css'
})
export class Taskform {
  taskTitle = '';

  constructor(private taskService: TaskService){}

  addTask(){
    this.taskService.addTask(this.taskTitle);
    this.taskTitle = '';
  }
}
