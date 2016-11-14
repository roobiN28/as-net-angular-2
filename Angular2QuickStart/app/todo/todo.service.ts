import { Injectable } from '@angular/core';
import { Todo } from '../domain/Todo';

@Injectable()
export class TodoService {
    list: Todo[];
    size: number;

    constructor() {
        this.list = new Array<Todo>(3);
    this.list[0] = new Todo("Todo1");
    this.list[1] = new Todo("Todo2");
    this.list[2] = new Todo("Todo3");
    }

    getAll(): Todo[] {
        return this.list;
    }


    add(todo:string): void {
        this.list.push(new Todo(todo));
    }



}
