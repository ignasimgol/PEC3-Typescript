"use strict";
/**
 * @class Service
 *
 * Manages the data of the application.
 */ // todo.service.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = require("../models/todo.model");
class TodoService {
    constructor() {
        this.todos = [];
        this.todos = [];
        // Verificar si estamos en el navegador
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                this.todos = JSON.parse(storedTodos).map(todo => new todo_model_1.Todo(todo.text, todo.complete));
            }
        }
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    commit(todos) {
        if (this.onTodoListChanged) {
            this.onTodoListChanged(todos);
        }
        // Guardar en localStorage solo si estamos en el navegador
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
    addTodo(text) {
        const todo = new todo_model_1.Todo(text);
        this.todos.push(todo);
        this.commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id ? new todo_model_1.Todo(updatedText, todo.complete) : todo);
        this.commit(this.todos);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.commit(this.todos);
    }
    toggleTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? new todo_model_1.Todo(todo.text, !todo.complete) : todo);
        this.commit(this.todos);
    }
}
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map