import './CartScreen.css';
import { Link } from "react-router-dom"
import CartItem from '../components/CartItem'

const CartScreen = () => {
    return (
        <>
        <div className='cartscreen'>
            <div className='cartscreen__left'>
                <h2> Shopping Cart</h2>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
        </div> 

        <div className='cartscreen__right'>
            <div className='cartscreen__info'>
                <p>Subtotal (0) items</p>
                <p>$400</p>
            </div>

            <div>
                 <button> Proceed to Checkout</button>
            </div>

        </div> 
        </div>
        </>
    )
}

export default CartScreen
