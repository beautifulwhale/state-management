import { makeAutoObservable } from "mobx";

class Count {
    count = 100;

    constructor() {
        makeAutoObservable(this);
    }

    reduceCount() {
        this.count -= 10;
    }

    get isLow() {
        return this.count <= 50;
    }
}

export default new Count();
