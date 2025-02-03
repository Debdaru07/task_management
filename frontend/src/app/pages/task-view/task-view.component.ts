import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-view',
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit{
  
  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {
      
  }
  
  createNewList() {
    // title: String
    this.taskService.createList('Todays list').subscribe((response: any) => {
      console.log(response);
    });
  }
}
