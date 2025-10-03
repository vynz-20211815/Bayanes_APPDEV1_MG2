import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/taskservice';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasklist.html',
  styleUrl: './tasklist.css'
})
export class Tasklist {
  constructor(public taskService: TaskService){}
}
