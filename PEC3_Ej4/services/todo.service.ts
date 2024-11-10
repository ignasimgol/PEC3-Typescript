/**
 * @class Service
 *
 * Manages the data of the application.
 */// todo.service.ts

 import { Todo } from '../models/todo.model';

 export class TodoService {
   todos: Todo[] = [];
   onTodoListChanged: Function | undefined;
 
   constructor() {
     this.todos = [];
 
     // Verificar si estamos en el navegador
     if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
       const storedTodos = localStorage.getItem('todos');
       if (storedTodos) {
         this.todos = (JSON.parse(storedTodos) as Todo[]).map(
           todo => new Todo(todo.text, todo.complete)
         );
       }
     }
   }
 
   bindTodoListChanged(callback: Function) {
     this.onTodoListChanged = callback;
   }
 
   private commit(todos: Todo[]): void {
     if (this.onTodoListChanged) {
       this.onTodoListChanged(todos);
     }
 
     // Guardar en localStorage solo si estamos en el navegador
     if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
       localStorage.setItem('todos', JSON.stringify(todos));
     }
   }
 
   addTodo(text: string): void {
     const todo = new Todo(text);
     this.todos.push(todo);
     this.commit(this.todos);
   }
 
   editTodo(id: string, updatedText: string): void {
     this.todos = this.todos.map(todo => 
       todo.id === id ? new Todo(updatedText, todo.complete) : todo
     );
     this.commit(this.todos);
   }
 
   deleteTodo(id: string): void {
     this.todos = this.todos.filter(todo => todo.id !== id);
     this.commit(this.todos);
   }
 
   toggleTodo(id: string): void {
     this.todos = this.todos.map(todo => 
       todo.id === id ? new Todo(todo.text, !todo.complete) : todo
     );
     this.commit(this.todos);
   }
 }
 