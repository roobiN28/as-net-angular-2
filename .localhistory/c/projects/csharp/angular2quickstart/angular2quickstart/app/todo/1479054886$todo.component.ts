import { Component, OnInit  }  from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../domain/Todo';

@Component({
    selector: 'my-todo',
    template: `
                <h1>TO DO!</h1>
                <h1>cos</h1>
                <ul>
                    <li *ngFor="let todo in todos">{{todo.item}}</li>
                </ul>
              `,
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) {

    }
    
    getTodos(): void {
        this.todos = this.todoService.getAll();
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

