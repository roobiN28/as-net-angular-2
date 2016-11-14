import { Component, OnInit  }  from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../domain/Todo';

@Component({
    selector: 'my-app',
    template: `
                <h1>Hello World!</h1>
                <h2>{{DynamicValue}}</h2>
                <ul>
                    <li *ngFor="let todo in todos">{{todo}}</li>
                </ul>
              `,
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) { }
    
    getTodos(): void {
        this.todoService.getAll().then(todos => this.todos = todos);
    }
    ngOnInit(): void {
        this.getTodos();
    }
    onSelect(todo: Todo): void {
        console.log("Done: " + todo.done);
    }
    add(todo: Todo): void {
        this.todoService.add("nowy");
        this.getTodos();
    }
}

