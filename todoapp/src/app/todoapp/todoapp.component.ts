import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent {
  press = false;
  
  taskDisciption = document.getElementById('tdiscription') as HTMLInputElement;
  onEnter(){
    let tasktitle = document.getElementById('tname') as HTMLInputElement;;
    console.log(tasktitle.value);
  }
}
