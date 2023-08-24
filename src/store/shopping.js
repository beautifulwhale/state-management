import { makeAutoObservable } from "mobx";

class Shopping {
    goods = [
        { id: 1, name: "猫粮", price: "50", count: 5 },
        { id: 2, name: "罐头", price: "15", count: 3 },
        { id: 3, name: "猫砂", price: "75", count: 1 },
    ];

    waitPayGoods = [];
    constructor() {
        makeAutoObservable(this);
    }

    // 添加到购物车
    appendGoodToCart(id) {
        const goodIndex = this.goods.findIndex((item) => item.id === id);

        if (goodIndex !== -1 && this.goods[goodIndex].count > 0) {
            const existingCartItemIndex = this.waitPayGoods.findIndex(
                (item) => item.id === id
            );

            if (existingCartItemIndex !== -1) {
                this.waitPayGoods[existingCartItemIndex].count += 1;
            } else {
                const newCartItem = { ...this.goods[goodIndex], count: 1 };
                this.waitPayGoods.push(newCartItem);
            }

            this.goods[goodIndex].count -= 1;
        }
    }

    // 计算购物车中总价格
    get totalPrice() {
        return this.waitPayGoods.reduce((total, item) => {
            return total + item.price * item.count;
        }, 0);
    }
}

export default new Shopping();
