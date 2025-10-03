import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TaskService } from './services/taskservice';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bayanes_APPDEV1_MG2');
  mainTitle = "Task Manager of MG2";
  
  taskService = inject(TaskService);

  get totalTask(){
    return this.taskService.totalTasks;
  }
}
