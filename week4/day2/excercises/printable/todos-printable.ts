'use strict';

import { Todo } from './todo-printable';

class TodoList {
    private todos: Todo[];

    constructor() {
        this.todos = [];
    }

    add(thing: Todo): void {
        this.todos.push(thing);
    }

    getThings(): Todo[] {
        return this.todos;
    }
}

function initializeTodos(): Todo[] {
    let todos = [];
    todos.push(new Todo('Feed the homework'));
    todos.push(new Todo('Walk the homework'));
    return todos;
}

let todos: Todo[] = initializeTodos();

export { todos };