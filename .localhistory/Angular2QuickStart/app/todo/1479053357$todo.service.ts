import { Injectable } from '@angular/core';
import { Todo } from '../domain';

@Injectable()
export class TodoService {
    list: Todo[];
    size: number;

    constructor (){
    this.list[0] = new Todo("Todo1");
    this.list[1] = new Todo("Todo2");
    this.list[2] = new Todo("Todo3");
    this.size = 3;
    }

    function getAll() {
        return this.list;
    }

    function add(todo:string) {
    this.size++;

    this.list[this.size] = todo;
    }



}
