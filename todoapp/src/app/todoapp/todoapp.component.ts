import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent {
  press = false;

  onEnter(){
    let inputElement = document.getElementById('tname') as HTMLInputElement;
    let value = inputElement.value;
    console.log(value);
  }
}
