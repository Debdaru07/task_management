import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-list',
  imports: [],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent {

  constructor(
    private taskService: TaskService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}
  
  createNewList(title: string) {
    this.taskService.createList(`${title}`).subscribe((response: any) => {
      console.log(response);
    });
  }

  goBack() {
    // this.router.navigate(['/']);
    this.location.back();
  }
  
  
}
