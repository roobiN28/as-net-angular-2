import { Component, OnInit  }  from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../domain/Todo';

@Component({
    selector: 'my-todo',
    template: `
                <h1>TO DO!</h1>
                  <input #newTodo
                      (keyup.enter)="add(newTodo.value)"
                      (blur)="add(newTodo.value); newTodo.value='' ">
                <ul>
                    <tr *ngFor="let todo of todos"><span>{{todo.item}}</span></tr>
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
    add(todo: string): void {
        this.todoService.add(todo);
        this.getTodos();
    }
}

