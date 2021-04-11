import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdder:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  title: string;
  desc: string;
  onSubmit() {
    const todo = {
      sno: 10,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log("Adding Todo")
    this.todoAdder.emit(todo);
  }
}
