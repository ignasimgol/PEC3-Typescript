"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
// todo.model.ts
class Todo {
    constructor(text, complete = false) {
        this.id = this.generateId();
        this.text = text;
        this.complete = complete;
    }
    generateId() {
        return (1e7 + -1e3 + -4e3 + -8e3 + -1e11).toString().replace(/[018]/g, (c) => (parseInt(c) ^ (Math.random() * 16) >> (parseInt(c) / 4)).toString(16));
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.model.js.map