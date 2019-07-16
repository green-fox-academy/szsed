'use strict'

import Printable from "./printable";

class Todo implements Printable{
    private name: string;
    private completed: boolean;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public complete(): void {
      this.completed = true;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }

    printAllFields(): void {
        console.log(this.name);
        let isCompleted: string = this.completed ? 'Yes' : 'No';
        console.log(`Completed: ${isCompleted}`);
    }
  }
  
  export { Todo };