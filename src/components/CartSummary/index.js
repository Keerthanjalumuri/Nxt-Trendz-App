import {Component} from 'react'
import CartContext from '../../context/CartContext'

import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const itemsCount = cartList.length
          let total = 0
          cartList.forEach(eachCartItem => {
            total += eachCartItem.price * eachCartItem.quantity
          })
          return (
            <div className="summary-card">
              <h1 className="order-total">
                Order Total: <span className="total-price">RS {total}/-</span>
              </h1>
              <p className="cart-items-count">{itemsCount} Items in cart</p>
              <button type="button" className="checkout-btn">
                Checkout
              </button>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
