import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
function SubTotal() {
    const [{basket},dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            {/* <div>
                    <div>
                        <p>
                            Subtotal ({basket.length} items ):<strong>$ {value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox">This order contains a gift</input>
                        </small>
                    </div>
                
            </div> */}
            <div >
                <p>Subtotal ( {basket.length} items) : <strong>$ {getBasketTotal(basket)}</strong></p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> This order contains a gift
                </small>
            </div>
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default SubTotal
