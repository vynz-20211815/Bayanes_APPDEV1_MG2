import { Routes } from '@angular/router';
import { Taskform } from './component/taskform/taskform';
import { Tasklist } from './component/tasklist/tasklist';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: Tasklist },
    { path: 'add-task', component: Taskform }
];
