import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks: Task[] = [];

  addTask(title: string) {
    if (title.trim()) {
      this.tasks.push({ title, completed: false });
    }
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  get totalTasks(): number {
    return this.tasks.length;
  }
}
