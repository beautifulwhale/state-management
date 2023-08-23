import { makeAutoObservable } from "mobx";

class TodoList {
    list = [
        { name: "lisa", id: 0 },
        { name: "lucy", id: 1 },
        { name: "jack", id: 2 },
    ];
    constructor() {
        makeAutoObservable(this);
    }

    appendTodo(item) {
        this.list.push(item);
    }

    deleteTodo(id) {
        this.list = this.list.filter((item) => item.id !== id);
    }
}

export default new TodoList();
