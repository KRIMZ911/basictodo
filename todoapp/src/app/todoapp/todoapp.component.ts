import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent {
  press = false;
  taskName = document.getElementById('tname') as HTMLInputElement;
  taskDisciption = document.getElementById('tdiscription') as HTMLInputElement;
  onEnter(){
    let tasktitle = this.taskName.value;
    console.log(tasktitle);
  }
}
