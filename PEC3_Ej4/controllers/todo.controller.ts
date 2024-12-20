/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
// todo.controller.ts

import { TodoService } from '../services/todo.service';
import { TodoView } from '../views/todo.views';

export class TodoController {
  service: TodoService;
  view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    this.onTodoListChanged(this.service.todos);
  }

  onTodoListChanged = (todos: any[]) => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = (todoText: string) => {
    this.service.addTodo(todoText);
  };

  handleEditTodo = (id: string, todoText: string) => {
    this.service.editTodo(id, todoText);
  };

  handleDeleteTodo = (id: string) => {
    this.service.deleteTodo(id);
  };

  handleToggleTodo = (id: string) => {
    this.service.toggleTodo(id);
  };
}
