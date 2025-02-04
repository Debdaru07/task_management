import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-view',
  imports: [],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss'
})
export class TaskViewComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToNewList() {
    this.router.navigate(['/new-list']);
  }
  
}
