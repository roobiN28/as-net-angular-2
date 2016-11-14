import { Component, OnInit  }  from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from '../domain/Todo';

@Component({
    selector: 'my-todo',
    template: `
                <h1>TO DO!</h1>
                <h1>cos</h1>
                <ul>
                  
                </ul>
              `,
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    constructor(private todoService: TodoService) {
        this.todos = new Array<Todo>(1);
       
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

