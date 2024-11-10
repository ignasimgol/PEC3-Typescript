(()=>{"use strict";var t={729:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoController=void 0,e.TodoController=class{constructor(t,e){this.onTodoListChanged=t=>{this.view.displayTodos(t)},this.handleAddTodo=t=>{this.service.addTodo(t)},this.handleEditTodo=(t,e)=>{this.service.editTodo(t,e)},this.handleDeleteTodo=t=>{this.service.deleteTodo(t)},this.handleToggleTodo=t=>{this.service.toggleTodo(t)},this.service=t,this.view=e,this.service.bindTodoListChanged(this.onTodoListChanged),this.view.bindAddTodo(this.handleAddTodo),this.view.bindEditTodo(this.handleEditTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindToggleTodo(this.handleToggleTodo),this.onTodoListChanged(this.service.todos)}}},861:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Todo=void 0,e.Todo=class{constructor(t,e=!1){this.id=this.generateId(),this.text=t,this.complete=e}generateId(){return(-99990013e3).toString().replace(/[018]/g,(t=>(parseInt(t)^16*Math.random()>>parseInt(t)/4).toString(16)))}}},789:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoService=void 0;const i=o(861);e.TodoService=class{constructor(){if(this.todos=[],this.todos=[],"undefined"!=typeof window&&"undefined"!=typeof localStorage){const t=localStorage.getItem("todos");t&&(this.todos=JSON.parse(t).map((t=>new i.Todo(t.text,t.complete))))}}bindTodoListChanged(t){this.onTodoListChanged=t}commit(t){this.onTodoListChanged&&this.onTodoListChanged(t),"undefined"!=typeof window&&"undefined"!=typeof localStorage&&localStorage.setItem("todos",JSON.stringify(t))}addTodo(t){const e=new i.Todo(t);this.todos.push(e),this.commit(this.todos)}editTodo(t,e){this.todos=this.todos.map((o=>o.id===t?new i.Todo(e,o.complete):o)),this.commit(this.todos)}deleteTodo(t){this.todos=this.todos.filter((e=>e.id!==t)),this.commit(this.todos)}toggleTodo(t){this.todos=this.todos.map((e=>e.id===t?new i.Todo(e.text,!e.complete):e)),this.commit(this.todos)}}},246:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TodoView=void 0,e.TodoView=class{constructor(){this.app=this.getElement("#root"),this.form=this.createElement("form"),this.input=this.createElement("input"),this.input.type="text",this.input.placeholder="Add todo",this.input.name="todo",this.submitButton=this.createElement("button"),this.submitButton.textContent="Submit",this.form.append(this.input,this.submitButton),this.title=this.createElement("h1"),this.title.textContent="Todos",this.todoList=this.createElement("ul","todo-list"),this.app.append(this.title,this.form,this.todoList),this._temporaryTodoText="",this._initLocalListeners()}get _todoText(){return this.input.value}_resetInput(){this.input.value=""}createElement(t,e){const o=document.createElement(t);return e&&o.classList.add(e),o}getElement(t){return document.querySelector(t)}displayTodos(t){for(;this.todoList.firstChild;)this.todoList.removeChild(this.todoList.firstChild);if(0===t.length){const t=this.createElement("p");t.textContent="Nothing to do! Add a task?",this.todoList.append(t)}else t.forEach((t=>{const e=this.createElement("li");e.id=t.id;const o=this.createElement("input");o.type="checkbox",o.checked=t.complete;const i=this.createElement("span");if(i.contentEditable="true",i.classList.add("editable"),t.complete){const e=this.createElement("s");e.textContent=t.text,i.append(e)}else i.textContent=t.text;const s=this.createElement("button","delete");s.textContent="Delete",e.append(o,i,s),this.todoList.append(e)}));console.log(t)}_initLocalListeners(){this.todoList.addEventListener("input",(t=>{const e=t.target;e.classList.contains("editable")&&(this._temporaryTodoText=e.innerText)}))}bindAddTodo(t){this.form.addEventListener("submit",(e=>{e.preventDefault(),this._todoText&&(t(this._todoText),this._resetInput())}))}bindDeleteTodo(t){this.todoList.addEventListener("click",(e=>{var o;const i=e.target;if(i.classList.contains("delete")){const e=null===(o=i.parentElement)||void 0===o?void 0:o.id;e&&t(e)}}))}bindEditTodo(t){this.todoList.addEventListener("focusout",(e=>{var o;const i=e.target;if(this._temporaryTodoText){const e=null===(o=i.parentElement)||void 0===o?void 0:o.id;e&&t(e,this._temporaryTodoText),this._temporaryTodoText=""}}))}bindToggleTodo(t){this.todoList.addEventListener("change",(e=>{var o;const i=e.target;if("checkbox"===i.type){const e=null===(o=i.parentElement)||void 0===o?void 0:o.id;e&&t(e)}}))}}}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var d=e[i]={exports:{}};return t[i](d,d.exports,o),d.exports}(()=>{const t=o(789),e=o(246);new(o(729).TodoController)(new t.TodoService,new e.TodoView)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiIrR0FhQSx1QkFJRSxXQUFBQSxDQUFZQyxFQUFzQkMsR0FXbEMsS0FBQUMsa0JBQXFCQyxJQUNuQkMsS0FBS0gsS0FBS0ksYUFBYUYsRUFBTSxFQUcvQixLQUFBRyxjQUFpQkMsSUFDZkgsS0FBS0osUUFBUVEsUUFBUUQsRUFBUyxFQUdoQyxLQUFBRSxlQUFpQixDQUFDQyxFQUFZSCxLQUM1QkgsS0FBS0osUUFBUVcsU0FBU0QsRUFBSUgsRUFBUyxFQUdyQyxLQUFBSyxpQkFBb0JGLElBQ2xCTixLQUFLSixRQUFRYSxXQUFXSCxFQUFHLEVBRzdCLEtBQUFJLGlCQUFvQkosSUFDbEJOLEtBQUtKLFFBQVFlLFdBQVdMLEVBQUcsRUEzQjNCTixLQUFLSixRQUFVQSxFQUNmSSxLQUFLSCxLQUFPQSxFQUNaRyxLQUFLSixRQUFRZ0Isb0JBQW9CWixLQUFLRixtQkFDdENFLEtBQUtILEtBQUtnQixZQUFZYixLQUFLRSxlQUMzQkYsS0FBS0gsS0FBS2lCLGFBQWFkLEtBQUtLLGdCQUM1QkwsS0FBS0gsS0FBS2tCLGVBQWVmLEtBQUtRLGtCQUM5QlIsS0FBS0gsS0FBS21CLGVBQWVoQixLQUFLVSxrQkFDOUJWLEtBQUtGLGtCQUFrQkUsS0FBS0osUUFBUUcsTUFDdEMsRSw2RUNsQkYsYUFLRSxXQUFBSixDQUFZc0IsRUFBY0MsR0FBb0IsR0FDNUNsQixLQUFLTSxHQUFLTixLQUFLbUIsYUFDZm5CLEtBQUtpQixLQUFPQSxFQUNaakIsS0FBS2tCLFNBQVdBLENBQ2xCLENBRVEsVUFBQUMsR0FDTixRQUFPLFlBQW1DQyxXQUFXQyxRQUFRLFVBQVdDLElBQ3JFQyxTQUFTRCxHQUFzQixHQUFoQkUsS0FBS0MsVUFBbUJGLFNBQVNELEdBQUssR0FBSUYsU0FBUyxLQUV2RSxFLHNGQ2pCRCxlQUVBLG9CQUlFLFdBQUF6QixHQUlFLEdBUEYsS0FBQUksTUFBZ0IsR0FJZEMsS0FBS0QsTUFBUSxHQUdTLG9CQUFYMkIsUUFBa0Qsb0JBQWpCQyxhQUE4QixDQUN4RSxNQUFNQyxFQUFjRCxhQUFhRSxRQUFRLFNBQ3JDRCxJQUNGNUIsS0FBS0QsTUFBUytCLEtBQUtDLE1BQU1ILEdBQXdCSSxLQUMvQ0MsR0FBUSxJQUFJLEVBQUFDLEtBQUtELEVBQUtoQixLQUFNZ0IsRUFBS2YsWUFHdkMsQ0FDRixDQUVBLG1CQUFBTixDQUFvQnVCLEdBQ2xCbkMsS0FBS0Ysa0JBQW9CcUMsQ0FDM0IsQ0FFUSxNQUFBQyxDQUFPckMsR0FDVEMsS0FBS0YsbUJBQ1BFLEtBQUtGLGtCQUFrQkMsR0FJSCxvQkFBWDJCLFFBQWtELG9CQUFqQkMsY0FDMUNBLGFBQWFVLFFBQVEsUUFBU1AsS0FBS1EsVUFBVXZDLEdBRWpELENBRUEsT0FBQUssQ0FBUWEsR0FDTixNQUFNZ0IsRUFBTyxJQUFJLEVBQUFDLEtBQUtqQixHQUN0QmpCLEtBQUtELE1BQU13QyxLQUFLTixHQUNoQmpDLEtBQUtvQyxPQUFPcEMsS0FBS0QsTUFDbkIsQ0FFQSxRQUFBUSxDQUFTRCxFQUFZa0MsR0FDbkJ4QyxLQUFLRCxNQUFRQyxLQUFLRCxNQUFNaUMsS0FBSUMsR0FDMUJBLEVBQUszQixLQUFPQSxFQUFLLElBQUksRUFBQTRCLEtBQUtNLEVBQWFQLEVBQUtmLFVBQVllLElBRTFEakMsS0FBS29DLE9BQU9wQyxLQUFLRCxNQUNuQixDQUVBLFVBQUFVLENBQVdILEdBQ1ROLEtBQUtELE1BQVFDLEtBQUtELE1BQU0wQyxRQUFPUixHQUFRQSxFQUFLM0IsS0FBT0EsSUFDbkROLEtBQUtvQyxPQUFPcEMsS0FBS0QsTUFDbkIsQ0FFQSxVQUFBWSxDQUFXTCxHQUNUTixLQUFLRCxNQUFRQyxLQUFLRCxNQUFNaUMsS0FBSUMsR0FDMUJBLEVBQUszQixLQUFPQSxFQUFLLElBQUksRUFBQTRCLEtBQUtELEVBQUtoQixNQUFPZ0IsRUFBS2YsVUFBWWUsSUFFekRqQyxLQUFLb0MsT0FBT3BDLEtBQUtELE1BQ25CLEUsaUZDbERILGlCQVNFLFdBQUFKLEdBQ0VLLEtBQUswQyxJQUFNMUMsS0FBSzJDLFdBQVcsU0FDM0IzQyxLQUFLNEMsS0FBTzVDLEtBQUs2QyxjQUFjLFFBQy9CN0MsS0FBSzhDLE1BQVE5QyxLQUFLNkMsY0FBYyxTQUNoQzdDLEtBQUs4QyxNQUFNQyxLQUFPLE9BQ2xCL0MsS0FBSzhDLE1BQU1FLFlBQWMsV0FDekJoRCxLQUFLOEMsTUFBTUcsS0FBTyxPQUNsQmpELEtBQUtrRCxhQUFlbEQsS0FBSzZDLGNBQWMsVUFDdkM3QyxLQUFLa0QsYUFBYUMsWUFBYyxTQUNoQ25ELEtBQUs0QyxLQUFLUSxPQUFPcEQsS0FBSzhDLE1BQU85QyxLQUFLa0QsY0FDbENsRCxLQUFLcUQsTUFBUXJELEtBQUs2QyxjQUFjLE1BQ2hDN0MsS0FBS3FELE1BQU1GLFlBQWMsUUFDekJuRCxLQUFLc0QsU0FBV3RELEtBQUs2QyxjQUFjLEtBQU0sYUFDekM3QyxLQUFLMEMsSUFBSVUsT0FBT3BELEtBQUtxRCxNQUFPckQsS0FBSzRDLEtBQU01QyxLQUFLc0QsVUFFNUN0RCxLQUFLdUQsbUJBQXFCLEdBQzFCdkQsS0FBS3dELHFCQUNQLENBR0EsYUFBSUMsR0FDRixPQUFPekQsS0FBSzhDLE1BQU1ZLEtBQ3BCLENBR0EsV0FBQUMsR0FDRTNELEtBQUs4QyxNQUFNWSxNQUFRLEVBQ3JCLENBR0EsYUFBQWIsQ0FBY2UsRUFBYUMsR0FDekIsTUFBTUMsRUFBVUMsU0FBU2xCLGNBQWNlLEdBRXZDLE9BRElDLEdBQVdDLEVBQVFFLFVBQVVDLElBQUlKLEdBQzlCQyxDQUNULENBR0EsVUFBQW5CLENBQVd1QixHQUVULE9BRGdCSCxTQUFTSSxjQUFjRCxFQUV6QyxDQUdBLFlBQUFqRSxDQUFhRixHQUVYLEtBQU9DLEtBQUtzRCxTQUFTYyxZQUNuQnBFLEtBQUtzRCxTQUFTZSxZQUFZckUsS0FBS3NELFNBQVNjLFlBSTFDLEdBQXFCLElBQWpCckUsRUFBTXVFLE9BQWMsQ0FDdEIsTUFBTUMsRUFBSXZFLEtBQUs2QyxjQUFjLEtBQzdCMEIsRUFBRXBCLFlBQWMsNkJBQ2hCbkQsS0FBS3NELFNBQVNGLE9BQU9tQixFQUN2QixNQUVFeEUsRUFBTXlFLFNBQVF2QyxJQUNaLE1BQU13QyxFQUFLekUsS0FBSzZDLGNBQWMsTUFDOUI0QixFQUFHbkUsR0FBSzJCLEVBQUszQixHQUViLE1BQU1vRSxFQUFXMUUsS0FBSzZDLGNBQWMsU0FDcEM2QixFQUFTM0IsS0FBTyxXQUNoQjJCLEVBQVNDLFFBQVUxQyxFQUFLZixTQUV4QixNQUFNMEQsRUFBTzVFLEtBQUs2QyxjQUFjLFFBSWhDLEdBSEErQixFQUFLQyxnQkFBa0IsT0FDdkJELEVBQUtaLFVBQVVDLElBQUksWUFFZmhDLEVBQUtmLFNBQVUsQ0FDakIsTUFBTTRELEVBQVM5RSxLQUFLNkMsY0FBYyxLQUNsQ2lDLEVBQU8zQixZQUFjbEIsRUFBS2hCLEtBQzFCMkQsRUFBS3hCLE9BQU8wQixFQUNkLE1BQ0VGLEVBQUt6QixZQUFjbEIsRUFBS2hCLEtBRzFCLE1BQU04RCxFQUFlL0UsS0FBSzZDLGNBQWMsU0FBVSxVQUNsRGtDLEVBQWE1QixZQUFjLFNBQzNCc0IsRUFBR3JCLE9BQU9zQixFQUFVRSxFQUFNRyxHQUcxQi9FLEtBQUtzRCxTQUFTRixPQUFPcUIsRUFBRyxJQUs1Qk8sUUFBUUMsSUFBSWxGLEVBQ2QsQ0FHUSxtQkFBQXlELEdBQ054RCxLQUFLc0QsU0FBUzRCLGlCQUFpQixTQUFVQyxJQUN2QyxNQUFNQyxFQUFTRCxFQUFNQyxPQUNqQkEsRUFBT3BCLFVBQVVxQixTQUFTLGNBQzVCckYsS0FBS3VELG1CQUFxQjZCLEVBQU9FLFVBQ25DLEdBRUosQ0FHQSxXQUFBekUsQ0FBWTBFLEdBQ1Z2RixLQUFLNEMsS0FBS3NDLGlCQUFpQixVQUFXQyxJQUNwQ0EsRUFBTUssaUJBRUZ4RixLQUFLeUQsWUFDUDhCLEVBQVF2RixLQUFLeUQsV0FDYnpELEtBQUsyRCxjQUNQLEdBRUosQ0FHQSxjQUFBNUMsQ0FBZXdFLEdBQ2J2RixLQUFLc0QsU0FBUzRCLGlCQUFpQixTQUFVQyxJLE1BQ3ZDLE1BQU1DLEVBQVNELEVBQU1DLE9BQ3JCLEdBQUlBLEVBQU9wQixVQUFVcUIsU0FBUyxVQUFXLENBQ3ZDLE1BQU0vRSxFQUF5QixRQUFwQixFQUFBOEUsRUFBT0sscUJBQWEsZUFBRW5GLEdBQzdCQSxHQUFJaUYsRUFBUWpGLEVBQ2xCLElBRUosQ0FHQSxZQUFBUSxDQUFheUUsR0FDWHZGLEtBQUtzRCxTQUFTNEIsaUJBQWlCLFlBQWFDLEksTUFDMUMsTUFBTUMsRUFBU0QsRUFBTUMsT0FDckIsR0FBSXBGLEtBQUt1RCxtQkFBb0IsQ0FDM0IsTUFBTWpELEVBQXlCLFFBQXBCLEVBQUE4RSxFQUFPSyxxQkFBYSxlQUFFbkYsR0FDN0JBLEdBQUlpRixFQUFRakYsRUFBSU4sS0FBS3VELG9CQUN6QnZELEtBQUt1RCxtQkFBcUIsRUFDNUIsSUFFSixDQUdBLGNBQUF2QyxDQUFldUUsR0FDYnZGLEtBQUtzRCxTQUFTNEIsaUJBQWlCLFVBQVdDLEksTUFDeEMsTUFBTUMsRUFBU0QsRUFBTUMsT0FDckIsR0FBb0IsYUFBaEJBLEVBQU9yQyxLQUFxQixDQUM5QixNQUFNekMsRUFBeUIsUUFBcEIsRUFBQThFLEVBQU9LLHFCQUFhLGVBQUVuRixHQUM3QkEsR0FBSWlGLEVBQVFqRixFQUNsQixJQUVKLEUsR0NyS0VvRixFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQyxNQ3BCQSxlQUNBLFNBR1ksSUFGWixPQUVnQkcsZ0JBQWUsSUFBSSxFQUFBQyxZQUFlLElBQUksRUFBQUMsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlYzNfZWo0Ly4vY29udHJvbGxlcnMvdG9kby5jb250cm9sbGVyLnRzIiwid2VicGFjazovL3BlYzNfZWo0Ly4vbW9kZWxzL3RvZG8ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vcGVjM19lajQvLi9zZXJ2aWNlcy90b2RvLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vcGVjM19lajQvLi92aWV3cy90b2RvLnZpZXdzLnRzIiwid2VicGFjazovL3BlYzNfZWo0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlYzNfZWo0Ly4vYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIENvbnRyb2xsZXJcbiAqXG4gKiBMaW5rcyB0aGUgdXNlciBpbnB1dCBhbmQgdGhlIHZpZXcgb3V0cHV0LlxuICpcbiAqIEBwYXJhbSBtb2RlbFxuICogQHBhcmFtIHZpZXdcbiAqL1xuLy8gdG9kby5jb250cm9sbGVyLnRzXG5cbmltcG9ydCB7IFRvZG9TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdG9kby5zZXJ2aWNlJztcbmltcG9ydCB7IFRvZG9WaWV3IH0gZnJvbSAnLi4vdmlld3MvdG9kby52aWV3cyc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvQ29udHJvbGxlciB7XG4gIHNlcnZpY2U6IFRvZG9TZXJ2aWNlO1xuICB2aWV3OiBUb2RvVmlldztcblxuICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBUb2RvU2VydmljZSwgdmlldzogVG9kb1ZpZXcpIHtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgdGhpcy5zZXJ2aWNlLmJpbmRUb2RvTGlzdENoYW5nZWQodGhpcy5vblRvZG9MaXN0Q2hhbmdlZCk7XG4gICAgdGhpcy52aWV3LmJpbmRBZGRUb2RvKHRoaXMuaGFuZGxlQWRkVG9kbyk7XG4gICAgdGhpcy52aWV3LmJpbmRFZGl0VG9kbyh0aGlzLmhhbmRsZUVkaXRUb2RvKTtcbiAgICB0aGlzLnZpZXcuYmluZERlbGV0ZVRvZG8odGhpcy5oYW5kbGVEZWxldGVUb2RvKTtcbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZVRvZG8odGhpcy5oYW5kbGVUb2dnbGVUb2RvKTtcbiAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkKHRoaXMuc2VydmljZS50b2Rvcyk7XG4gIH1cblxuICBvblRvZG9MaXN0Q2hhbmdlZCA9ICh0b2RvczogYW55W10pID0+IHtcbiAgICB0aGlzLnZpZXcuZGlzcGxheVRvZG9zKHRvZG9zKTtcbiAgfTtcblxuICBoYW5kbGVBZGRUb2RvID0gKHRvZG9UZXh0OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNlcnZpY2UuYWRkVG9kbyh0b2RvVGV4dCk7XG4gIH07XG5cbiAgaGFuZGxlRWRpdFRvZG8gPSAoaWQ6IHN0cmluZywgdG9kb1RleHQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2VydmljZS5lZGl0VG9kbyhpZCwgdG9kb1RleHQpO1xuICB9O1xuXG4gIGhhbmRsZURlbGV0ZVRvZG8gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2VydmljZS5kZWxldGVUb2RvKGlkKTtcbiAgfTtcblxuICBoYW5kbGVUb2dnbGVUb2RvID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNlcnZpY2UudG9nZ2xlVG9kbyhpZCk7XG4gIH07XG59XG4iLCIvKipcbiAqIEBjbGFzcyBNb2RlbFxuICpcbiAqIE1hbmFnZXMgdGhlIGRhdGEgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5cbi8vIHRvZG8ubW9kZWwudHNcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbXBsZXRlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgY29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmdlbmVyYXRlSWQoKTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAoMWU3ICsgLTFlMyArIC00ZTMgKyAtOGUzICsgLTFlMTEpLnRvU3RyaW5nKCkucmVwbGFjZSgvWzAxOF0vZywgKGM6IHN0cmluZykgPT5cbiAgICAgIChwYXJzZUludChjKSBeIChNYXRoLnJhbmRvbSgpICogMTYpID4+IChwYXJzZUludChjKSAvIDQpKS50b1N0cmluZygxNilcbiAgICApO1xuICB9XG59XG5cbiIsIi8qKlxuICogQGNsYXNzIFNlcnZpY2VcbiAqXG4gKiBNYW5hZ2VzIHRoZSBkYXRhIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqLy8vIHRvZG8uc2VydmljZS50c1xuXG4gaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvLm1vZGVsJztcblxuIGV4cG9ydCBjbGFzcyBUb2RvU2VydmljZSB7XG4gICB0b2RvczogVG9kb1tdID0gW107XG4gICBvblRvZG9MaXN0Q2hhbmdlZDogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG4gXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgdGhpcy50b2RvcyA9IFtdO1xuIFxuICAgICAvLyBWZXJpZmljYXIgc2kgZXN0YW1vcyBlbiBlbCBuYXZlZ2Fkb3JcbiAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgY29uc3Qgc3RvcmVkVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcbiAgICAgICBpZiAoc3RvcmVkVG9kb3MpIHtcbiAgICAgICAgIHRoaXMudG9kb3MgPSAoSlNPTi5wYXJzZShzdG9yZWRUb2RvcykgYXMgVG9kb1tdKS5tYXAoXG4gICAgICAgICAgIHRvZG8gPT4gbmV3IFRvZG8odG9kby50ZXh0LCB0b2RvLmNvbXBsZXRlKVxuICAgICAgICAgKTtcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiBcbiAgIGJpbmRUb2RvTGlzdENoYW5nZWQoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZWQgPSBjYWxsYmFjaztcbiAgIH1cbiBcbiAgIHByaXZhdGUgY29tbWl0KHRvZG9zOiBUb2RvW10pOiB2b2lkIHtcbiAgICAgaWYgKHRoaXMub25Ub2RvTGlzdENoYW5nZWQpIHtcbiAgICAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkKHRvZG9zKTtcbiAgICAgfVxuIFxuICAgICAvLyBHdWFyZGFyIGVuIGxvY2FsU3RvcmFnZSBzb2xvIHNpIGVzdGFtb3MgZW4gZWwgbmF2ZWdhZG9yXG4gICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgIH1cbiAgIH1cbiBcbiAgIGFkZFRvZG8odGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyh0ZXh0KTtcbiAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICB0aGlzLmNvbW1pdCh0aGlzLnRvZG9zKTtcbiAgIH1cbiBcbiAgIGVkaXRUb2RvKGlkOiBzdHJpbmcsIHVwZGF0ZWRUZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKHRvZG8gPT4gXG4gICAgICAgdG9kby5pZCA9PT0gaWQgPyBuZXcgVG9kbyh1cGRhdGVkVGV4dCwgdG9kby5jb21wbGV0ZSkgOiB0b2RvXG4gICAgICk7XG4gICAgIHRoaXMuY29tbWl0KHRoaXMudG9kb3MpO1xuICAgfVxuIFxuICAgZGVsZXRlVG9kbyhpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uaWQgIT09IGlkKTtcbiAgICAgdGhpcy5jb21taXQodGhpcy50b2Rvcyk7XG4gICB9XG4gXG4gICB0b2dnbGVUb2RvKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKHRvZG8gPT4gXG4gICAgICAgdG9kby5pZCA9PT0gaWQgPyBuZXcgVG9kbyh0b2RvLnRleHQsICF0b2RvLmNvbXBsZXRlKSA6IHRvZG9cbiAgICAgKTtcbiAgICAgdGhpcy5jb21taXQodGhpcy50b2Rvcyk7XG4gICB9XG4gfVxuICIsIi8qKlxuICogQGNsYXNzIFZpZXdcbiAqXG4gKiBWaXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1vZGVsLlxuICovXG4vLyB0b2RvLnZpZXcudHNcblxuLy8gRGVmaW5pbW9zIHVuIHRpcG8gcGFyYSBlbCB0b2RvLCBxdWUgY29udGllbmUgbGFzIHByb3BpZWRhZGVzIGLDoXNpY2FzLlxuZXhwb3J0IGludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBjb21wbGV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFRvZG9WaWV3IHtcbiAgYXBwOiBIVE1MRWxlbWVudDtcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgc3VibWl0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgdGl0bGU6IEhUTUxFbGVtZW50O1xuICB0b2RvTGlzdDogSFRNTFVMaXN0RWxlbWVudDtcbiAgcHJpdmF0ZSBfdGVtcG9yYXJ5VG9kb1RleHQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwcCA9IHRoaXMuZ2V0RWxlbWVudChcIiNyb290XCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImZvcm1cIikgYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCB0b2RvXCI7XG4gICAgdGhpcy5pbnB1dC5uYW1lID0gXCJ0b2RvXCI7XG4gICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgdGhpcy5zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5pbnB1dCwgdGhpcy5zdWJtaXRCdXR0b24pO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gXCJUb2Rvc1wiO1xuICAgIHRoaXMudG9kb0xpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcInRvZG8tbGlzdFwiKSBhcyBIVE1MVUxpc3RFbGVtZW50O1xuICAgIHRoaXMuYXBwLmFwcGVuZCh0aGlzLnRpdGxlLCB0aGlzLmZvcm0sIHRoaXMudG9kb0xpc3QpO1xuXG4gICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSBcIlwiO1xuICAgIHRoaXMuX2luaXRMb2NhbExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gR2V0dGVyIHBhcmEgb2J0ZW5lciBlbCB0ZXh0byBhY3R1YWwgZGVsIGlucHV0XG4gIGdldCBfdG9kb1RleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIC8vIE3DqXRvZG8gcGFyYSByZXNldGVhciBlbCBpbnB1dFxuICBfcmVzZXRJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIC8vIENyZWEgdW4gZWxlbWVudG8gSFRNTCB5IGxlIGFzaWduYSB1bmEgY2xhc2Ugc2kgc2UgcHJvcG9yY2lvbmFcbiAgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZywgY2xhc3NOYW1lPzogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBPYnRpZW5lIHVuIGVsZW1lbnRvIGRlbCBET00gdXNhbmRvIHVuIHNlbGVjdG9yXG4gIGdldEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgLy8gTcOpdG9kbyBwYXJhIG1vc3RyYXIgbG9zIHRvZG9zIGVuIGVsIERPTVxuICBkaXNwbGF5VG9kb3ModG9kb3M6IFRvZG9bXSk6IHZvaWQge1xuICAgIC8vIEVsaW1pbmEgdG9kb3MgbG9zIG5vZG9zIGFjdHVhbGVzXG4gICAgd2hpbGUgKHRoaXMudG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy50b2RvTGlzdC5yZW1vdmVDaGlsZCh0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIE11ZXN0cmEgdW4gbWVuc2FqZSBzaSBubyBoYXkgVE9ET3NcbiAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwID0gdGhpcy5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHAudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgdG8gZG8hIEFkZCBhIHRhc2s/XCI7XG4gICAgICB0aGlzLnRvZG9MaXN0LmFwcGVuZChwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYSBub2RvcyBwYXJhIGNhZGEgdG9kb1xuICAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaWQgPSB0b2RvLmlkO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGU7XG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImVkaXRhYmxlXCIpO1xuXG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgY29uc3Qgc3RyaWtlID0gdGhpcy5jcmVhdGVFbGVtZW50KFwic1wiKTtcbiAgICAgICAgICBzdHJpa2UudGV4dENvbnRlbnQgPSB0b2RvLnRleHQ7XG4gICAgICAgICAgc3Bhbi5hcHBlbmQoc3RyaWtlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdG9kby50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiZGVsZXRlXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICBsaS5hcHBlbmQoY2hlY2tib3gsIHNwYW4sIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgLy8gQcOxYWRlIGVsIHRvZG8gYSBsYSBsaXN0YVxuICAgICAgICB0aGlzLnRvZG9MaXN0LmFwcGVuZChsaSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWJ1Z2dpbmdcbiAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gIH1cblxuICAvLyBNw6l0b2RvIHBhcmEgaW5pY2lhciBsaXN0ZW5lcnMgbG9jYWxlcyBlbiBlbCBET01cbiAgcHJpdmF0ZSBfaW5pdExvY2FsTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdGFibGVcIikpIHtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSB0YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVmluY3VsYSBlbCBldmVudG8gZGUgYWdyZWdhciB0b2RvXG4gIGJpbmRBZGRUb2RvKGhhbmRsZXI6ICh0b2RvVGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuX3RvZG9UZXh0KSB7XG4gICAgICAgIGhhbmRsZXIodGhpcy5fdG9kb1RleHQpO1xuICAgICAgICB0aGlzLl9yZXNldElucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBWaW5jdWxhIGVsIGV2ZW50byBkZSBlbGltaW5hciB0b2RvXG4gIGJpbmREZWxldGVUb2RvKGhhbmRsZXI6IChpZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQucGFyZW50RWxlbWVudD8uaWQ7XG4gICAgICAgIGlmIChpZCkgaGFuZGxlcihpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBWaW5jdWxhIGVsIGV2ZW50byBkZSBlZGljacOzbiBkZSB0b2RvXG4gIGJpbmRFZGl0VG9kbyhoYW5kbGVyOiAoaWQ6IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMuX3RlbXBvcmFyeVRvZG9UZXh0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ/LmlkO1xuICAgICAgICBpZiAoaWQpIGhhbmRsZXIoaWQsIHRoaXMuX3RlbXBvcmFyeVRvZG9UZXh0KTtcbiAgICAgICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSBcIlwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVmluY3VsYSBlbCBldmVudG8gZGUgY2FtYmlvIGRlIGVzdGFkbyBkZSB0b2RvIChjb21wbGV0YWRvIG8gbm8gY29tcGxldGFkbylcbiAgYmluZFRvZ2dsZVRvZG8oaGFuZGxlcjogKGlkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5wYXJlbnRFbGVtZW50Py5pZDtcbiAgICAgICAgaWYgKGlkKSBoYW5kbGVyKGlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGFwcC50c1xuXG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdG9kby5zZXJ2aWNlJztcbmltcG9ydCB7IFRvZG9WaWV3IH0gZnJvbSAnLi92aWV3cy90b2RvLnZpZXdzJztcbmltcG9ydCB7IFRvZG9Db250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy90b2RvLmNvbnRyb2xsZXInO1xuXG5jb25zdCBhcHAgPSBuZXcgVG9kb0NvbnRyb2xsZXIobmV3IFRvZG9TZXJ2aWNlKCksIG5ldyBUb2RvVmlldygpKTtcbiJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInNlcnZpY2UiLCJ2aWV3Iiwib25Ub2RvTGlzdENoYW5nZWQiLCJ0b2RvcyIsInRoaXMiLCJkaXNwbGF5VG9kb3MiLCJoYW5kbGVBZGRUb2RvIiwidG9kb1RleHQiLCJhZGRUb2RvIiwiaGFuZGxlRWRpdFRvZG8iLCJpZCIsImVkaXRUb2RvIiwiaGFuZGxlRGVsZXRlVG9kbyIsImRlbGV0ZVRvZG8iLCJoYW5kbGVUb2dnbGVUb2RvIiwidG9nZ2xlVG9kbyIsImJpbmRUb2RvTGlzdENoYW5nZWQiLCJiaW5kQWRkVG9kbyIsImJpbmRFZGl0VG9kbyIsImJpbmREZWxldGVUb2RvIiwiYmluZFRvZ2dsZVRvZG8iLCJ0ZXh0IiwiY29tcGxldGUiLCJnZW5lcmF0ZUlkIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiYyIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZFRvZG9zIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsInRvZG8iLCJUb2RvIiwiY2FsbGJhY2siLCJjb21taXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaCIsInVwZGF0ZWRUZXh0IiwiZmlsdGVyIiwiYXBwIiwiZ2V0RWxlbWVudCIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwic3VibWl0QnV0dG9uIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJ0aXRsZSIsInRvZG9MaXN0IiwiX3RlbXBvcmFyeVRvZG9UZXh0IiwiX2luaXRMb2NhbExpc3RlbmVycyIsIl90b2RvVGV4dCIsInZhbHVlIiwiX3Jlc2V0SW5wdXQiLCJ0YWciLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsZW5ndGgiLCJwIiwiZm9yRWFjaCIsImxpIiwiY2hlY2tib3giLCJjaGVja2VkIiwic3BhbiIsImNvbnRlbnRFZGl0YWJsZSIsInN0cmlrZSIsImRlbGV0ZUJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImlubmVyVGV4dCIsImhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudEVsZW1lbnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIlRvZG9Db250cm9sbGVyIiwiVG9kb1NlcnZpY2UiLCJUb2RvVmlldyJdLCJzb3VyY2VSb290IjoiIn0=