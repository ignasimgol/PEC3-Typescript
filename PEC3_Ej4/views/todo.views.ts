/**
 * @class View
 *
 * Visual representation of the model.
 */
// todo.view.ts

// Definimos un tipo para el todo, que contiene las propiedades básicas.
export interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

export class TodoView {
  constructor() {
    // Espera a que el DOM se haya cargado antes de inicializar
    window.addEventListener('DOMContentLoaded', () => {
      this.app = this.getElement("#root") as HTMLElement;
      this.form = this.createElement("form") as HTMLFormElement;
      this.input = this.createElement("input") as HTMLInputElement;
      this.input.type = "text";
      this.input.placeholder = "Add todo";
      this.input.name = "todo";
      this.submitButton = this.createElement("button") as HTMLButtonElement;
      this.submitButton.textContent = "Submit";
      this.form.append(this.input, this.submitButton);
      this.title = this.createElement("h1");
      this.title.textContent = "Todos";
      this.todoList = this.createElement("ul", "todo-list") as HTMLUListElement;
      this.app.append(this.title, this.form, this.todoList);

      this._temporaryTodoText = "";
      this._initLocalListeners();
    });
  }
}


  // Getter para obtener el texto actual del input
  get _todoText(): string {
    return this.input.value;
  }

  // Método para resetear el input
  _resetInput(): void {
    this.input.value = "";
  }

  // Crea un elemento HTML y le asigna una clase si se proporciona
  createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  // Obtiene un elemento del DOM usando un selector
  getElement(selector: string): HTMLElement | null {
    const element = document.querySelector(selector);
    return element as HTMLElement;
  }

  // Método para mostrar los todos en el DOM
  displayTodos(todos: Todo[]): void {
    // Elimina todos los nodos actuales
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Muestra un mensaje si no hay TODOs
    if (todos.length === 0) {
      const p = this.createElement("p");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Crea nodos para cada todo
      todos.forEach(todo => {
        const li = this.createElement("li");
        li.id = todo.id;

        const checkbox = this.createElement("input") as HTMLInputElement;
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span = this.createElement("span");
        span.contentEditable = "true";
        span.classList.add("editable");

        if (todo.complete) {
          const strike = this.createElement("s");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Añade el todo a la lista
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  // Método para iniciar listeners locales en el DOM
  private _initLocalListeners(): void {
    this.todoList.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("editable")) {
        this._temporaryTodoText = target.innerText;
      }
    });
  }

  // Vincula el evento de agregar todo
  bindAddTodo(handler: (todoText: string) => void): void {
    this.form.addEventListener("submit", (event: Event) => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  // Vincula el evento de eliminar todo
  bindDeleteTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("delete")) {
        const id = target.parentElement?.id;
        if (id) handler(id);
      }
    });
  }

  // Vincula el evento de edición de todo
  bindEditTodo(handler: (id: string, text: string) => void): void {
    this.todoList.addEventListener("focusout", (event: Event) => {
      const target = event.target as HTMLElement;
      if (this._temporaryTodoText) {
        const id = target.parentElement?.id;
        if (id) handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  // Vincula el evento de cambio de estado de todo (completado o no completado)
  bindToggleTodo(handler: (id: string) => void): void {
    this.todoList.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.type === "checkbox") {
        const id = target.parentElement?.id;
        if (id) handler(id);
      }
    });
  }
}
