// implement this interface on the Domino, Todo

'use strict';

import dominoes from "./dominoes-printable";
import { todos } from "./todos-printable";

for (let domino of dominoes) {
    domino.printAllFields();
}

for (let todo of todos) {
    todo.printAllFields();
}