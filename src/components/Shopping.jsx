import React, { useContext } from 'react';
import { MyContext } from '../context';
import { observer } from 'mobx-react'
import { runInAction } from 'mobx'

function Shopping() {
  const { shopping } = useContext(MyContext)

  const handleAppendGood = (id) => {
    runInAction(() => {
      shopping.appendGoodToCart(id)
    })
  }

  return (
    <div>
      <h1>Shopping Page</h1>
      <ul>
        {
          shopping.goods.map(good => {
            return <div key={good.id}>
              <li>名称: {good.name} ----- 库存:  {good.count}</li>
              <button onClick={() => handleAppendGood(good.id)}>添加到购物车</button>
            </div>
          })
        }
      </ul>
      <br />
      {/* 购物车 */}
      <div>
        <h1>已选商品:</h1>
        {
          shopping.waitPayGoods.length ? <>
            <ul>
              {
                shopping.waitPayGoods.map(item => {
                  return <li key={item.id}>name: {item.name} ===== number: {item.count}</li>
                })
              }
            </ul>
          </> : <h4>暂时还未选择任何商品</h4>
        }
      </div>
      <br />
      <h2>总价格为: {shopping.totalPrice}</h2>
    </div>
  );
}

export default observer(Shopping);
