/**
 * @class Model
 *
 * Manages the data of the application.
 */

// todo.model.ts

export class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor(text: string, complete: boolean = false) {
    this.id = this.generateId();
    this.text = text;
    this.complete = complete;
  }

  private generateId(): string {
    return (1e7 + -1e3 + -4e3 + -8e3 + -1e11).toString().replace(/[018]/g, (c: string) =>
      (parseInt(c) ^ (Math.random() * 16) >> (parseInt(c) / 4)).toString(16)
    );
  }
}

