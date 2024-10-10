import { useState, useContext } from 'react';
import './ChekOut.css';  // Ensure the CSS file is correctly named
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';  // Updated to use useNavigate
import { PriceContext } from '../PriceContext';  // Import PriceContext
import Swal from 'sweetalert2';  // Import SweetAlert2

function Checkout() {
    const { cart, setCart } = useContext(CartContext);  // Access CartContext
    const { total, shippingCharge, offer, subtotal } = useContext(PriceContext);  // Access PriceContext
    const [couponCode, setCouponCode] = useState('');
    const [validCoupon, setValidCoupon] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
    });
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const handlePayment = () => {
        // Validate user and payment form inputs
        if (!userDetails.name || !userDetails.email || !userDetails.phoneNumber || !userDetails.address) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all user details!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!paymentDetails.name || !paymentDetails.cardNumber || !paymentDetails.expirationDate || !paymentDetails.cvv) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all payment details!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // If payment is successful, show success message with Swal
        setPaymentSuccess(true);
        Swal.fire({
            title: 'Payment Successful!',
            text: 'Thank you for your purchase!',
            icon: 'success',
            confirmButtonText: 'Go to Home'
        }).then(() => {
            navigate('/');  // Redirect to the homepage
        });
    };

    // Calculate total amount to pay
    const totalAmountToPay = (total + shippingCharge - offer).toFixed(2);

    return (
        <>
            <div className="checkout-container">
                <h2>Checkout</h2>
                <form>
                    <div className="user-details-section">
                        <h3>User Information</h3>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={userDetails.email}
                            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                        />
                        <label>Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter your phone number"
                            value={userDetails.phoneNumber}
                            onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                        />
                        <label>Address</label>
                        <textarea
                            placeholder="Enter your address"
                            value={userDetails.address}
                            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                            rows="4"
                        />
                    </div>
<br />
                    <div className="payment-section">
                        <h3>Payment Information</h3>
                        <label>Name on Card</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={paymentDetails.name}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                        />
                        <label>Card Number</label>
                        <input
                            type="text"
                            placeholder="Enter your card number"
                            value={paymentDetails.cardNumber}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                        />
                        <label>Expiration Date</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={paymentDetails.expirationDate}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value })}
                        />
                        <label>CVV</label>
                        <input
                            type="text"
                            placeholder="Enter CVV"
                            value={paymentDetails.cvv}
                            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                        />

                        {/* Display the total amount to pay in the payment section */}
                        <label>Amount to Pay</label>
                        <input
                            type="text"
                            value={`₹${totalAmountToPay}`}
                            readOnly
                            className="readonly-input"
                        />

                        <button type="button" onClick={handlePayment}>Complete Payment</button>
                    </div>

                </form>

                <br /><br />
                <div className="SubTotle">
                    <div className="MyTotle">
                        <div className="P">
                            <p className='font'>Total: <b>₹{total.toFixed(2)}</b></p>
                            <p className='font'>Shipping Charge: <b>₹{shippingCharge.toFixed(2)}</b></p>
                            <p className='font'>Discount: <b>₹{offer.toFixed(2)}</b></p>
                            <p className='font'>Subtotal: <b>₹{subtotal.toFixed(2)}</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Checkout;
