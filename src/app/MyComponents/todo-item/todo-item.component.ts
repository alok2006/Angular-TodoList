import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo
  @Output() todoDeleter :EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox :EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  DeleteTodo(todo:Todo){
    this.todoDeleter.emit(todo);
    console.log("Onlick Triggered ")
  }
  onCheckClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }
}
