import { useState, useContext, useEffect } from 'react';
import './Cart.css';
import { CartContext } from '../CartContext';
import { PriceContext } from '../PriceContext';

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const { total, setTotal, shippingCharge, setShippingCharge, offer, setOffer, subtotal } = useContext(PriceContext);

    const [quantities, setQuantities] = useState(cart.map(() => 1));
    const [couponCode, setCouponCode] = useState("");
    const [validCoupon, setValidCoupon] = useState(false);

    const increment = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const decrement = (index) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    // Apply the coupon logic
    const applyCoupon = () => {
        if (couponCode === "kashyap") {
            setValidCoupon(true);
            const discount = total * 0.25;
            setOffer(discount);
        } else {
            setValidCoupon(false);
            setOffer(0);
        }
    };

    // Recalculate totals whenever the cart, quantities, shipping charge, or offer changes
    useEffect(() => {
        let newTotal = 0;
        cart.forEach((item, index) => {
            newTotal += item.price * quantities[index];
        });
        setTotal(newTotal);

        const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
        const newShippingCharge = totalItems <= 1 ? 0 : 50;
        setShippingCharge(newShippingCharge);
    }, [cart, quantities, setTotal, setShippingCharge]);

    return (
        <>
            <div className="warpeer">
                <br />
                <br />

                <h1>Your Cart</h1> <br />
                <br />

                {cart.length === 0 ? (
                    <>
                        <h3>Item Not Found</h3>
                        <br />
                    </>
                ) : null}

                {cart.map((value, index) => (
                    <div className="main2" key={index}>
                        <div className="images">
                            <img src={value.image} alt={value.name} width={"100%"} height={"100%"} />
                        </div>
                        <div className="names">
                            <h1>{value.name}</h1>
                        </div>
                        <div className="prices">
                            <p>{value.price * quantities[index]} ₹</p>
                        </div>
                        <div className="count">
                            <button onClick={() => increment(index)}>+</button>
                            <span>{quantities[index]}</span>
                            <button onClick={() => decrement(index)}>-</button>
                        </div>
                    </div>
                ))}

                <div className="subTotle">
                    <div className="myTotle">
                        <div className="p">
                            <p className='Font'>Total: <b>₹{total.toFixed(2)}</b></p>
                            <p className='Font'>Shipping Charge: <b>₹{shippingCharge.toFixed(2)}</b></p>
                            <p className='Font'>Offer: <b>₹{offer.toFixed(2)}</b></p>
                            <p className='Font'>Sub Total: <b>₹{subtotal.toFixed(2)}</b></p>
                        </div>
                    </div>

                    <div className="coupon-section">
                        <input
                            type="text"
                            placeholder="Enter Coupon Code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button onClick={applyCoupon}>Apply Coupon</button> <br />
                        {validCoupon ? <p style={{ color: "green" }}>Coupon applied! 25% discount.</p> : null}
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}

export default Cart;
