/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
  todos:Array<any>;
  onTodoListChanged:Function;
  getItem:Function;
  id:number;
  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos") || "")).map(
      (todo: { complete: boolean; text: string; } | undefined) => new Todo(todo)
    );
  }

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos:object[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text:string, complete:boolean) {
    this.todos.push(new Todo({text,complete}));

    this._commit(this.todos);
  }

  editTodo(id: number, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: number) {
    this.todos = this.todos.filter(({ id }) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id:number) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
