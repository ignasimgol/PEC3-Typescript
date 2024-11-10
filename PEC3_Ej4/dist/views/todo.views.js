"use strict";
/**
 * @class View
 *
 * Visual representation of the model.
 */
// todo.view.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
class TodoView {
    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = this.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this._temporaryTodoText = "";
        this._initLocalListeners();
    }
    // Getter para obtener el texto actual del input
    get _todoText() {
        return this.input.value;
    }
    // Método para resetear el input
    _resetInput() {
        this.input.value = "";
    }
    // Crea un elemento HTML y le asigna una clase si se proporciona
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    // Obtiene un elemento del DOM usando un selector
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    // Método para mostrar los todos en el DOM
    displayTodos(todos) {
        // Elimina todos los nodos actuales
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Muestra un mensaje si no hay TODOs
        if (todos.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        }
        else {
            // Crea nodos para cada todo
            todos.forEach(todo => {
                const li = this.createElement("li");
                li.id = todo.id;
                const checkbox = this.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;
                const span = this.createElement("span");
                span.contentEditable = "true";
                span.classList.add("editable");
                if (todo.complete) {
                    const strike = this.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
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
    _initLocalListeners() {
        this.todoList.addEventListener("input", (event) => {
            const target = event.target;
            if (target.classList.contains("editable")) {
                this._temporaryTodoText = target.innerText;
            }
        });
    }
    // Vincula el evento de agregar todo
    bindAddTodo(handler) {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }
    // Vincula el evento de eliminar todo
    bindDeleteTodo(handler) {
        this.todoList.addEventListener("click", (event) => {
            var _a;
            const target = event.target;
            if (target.classList.contains("delete")) {
                const id = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id)
                    handler(id);
            }
        });
    }
    // Vincula el evento de edición de todo
    bindEditTodo(handler) {
        this.todoList.addEventListener("focusout", (event) => {
            var _a;
            const target = event.target;
            if (this._temporaryTodoText) {
                const id = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id)
                    handler(id, this._temporaryTodoText);
                this._temporaryTodoText = "";
            }
        });
    }
    // Vincula el evento de cambio de estado de todo (completado o no completado)
    bindToggleTodo(handler) {
        this.todoList.addEventListener("change", (event) => {
            var _a;
            const target = event.target;
            if (target.type === "checkbox") {
                const id = (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id;
                if (id)
                    handler(id);
            }
        });
    }
}
exports.TodoView = TodoView;
//# sourceMappingURL=todo.views.js.map