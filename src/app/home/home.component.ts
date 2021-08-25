import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  @Input() newTodo: string = '';
  todos: string[] = ['study', 'read', 'cook'];

  addTodo(newTodo: string): String[] {
    this.todos.push(newTodo);
    console.log(this.todos, 'lllllll');
    return this.todos;
  }
  deleteTodo(todo: string): String[] {
    this.todos.splice(this.todos.indexOf(todo),1);
    console.log(this.todos, 'lllllll');
    return this.todos;
  }

TodoEmpty(): boolean {
  console.log(this.todos);
if(this.todos.length === 0){

  return true
}
return false

}
 arrayEmpty: boolean = this.TodoEmpty()
 buttonColor: String = "green"
  constructor() {}

  ngOnInit(): void {}
}
