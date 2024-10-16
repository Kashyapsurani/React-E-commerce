import { useState, useContext, useEffect } from 'react';
import "./ChekOut.css";
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import { PriceContext } from '../PriceContext';
import Swal from 'sweetalert2';
import { CheckoutContext } from '../ChekOutContext';
import { RecentPurchasesContext } from '../RecentPurchasesContext';

function Checkout() {
    const { cart, setCart } = useContext(CartContext);
    const { total, shippingCharge, offer, subtotal } = useContext(PriceContext);
    const { clearCart } = useContext(CheckoutContext);
    const { addRecentPurchase } = useContext(RecentPurchasesContext);

    const [pincode, setPincode] = useState('');
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bankDetails, setBankDetails] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const [totalAmountToPay, setTotalAmountToPay] = useState(0);
    const [storedSubtotal, setStoredSubtotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Load saved data from localStorage (if exists)
        const savedCart = localStorage.getItem('cart');
        const savedPincode = localStorage.getItem('pincode');
        const savedAddress = localStorage.getItem('address');
        const savedFirstName = localStorage.getItem('firstName');
        const savedLastName = localStorage.getItem('lastName');
        const savedTotalAmountToPay = localStorage.getItem('totalAmountToPay');
        const savedSubtotal = localStorage.getItem('subtotal');

        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedPincode) setPincode(savedPincode);
        if (savedAddress) setAddress(savedAddress);
        if (savedFirstName) setFirstName(savedFirstName);
        if (savedLastName) setLastName(savedLastName);
        if (savedTotalAmountToPay) setTotalAmountToPay(parseFloat(savedTotalAmountToPay));
        if (savedSubtotal) setStoredSubtotal(parseFloat(savedSubtotal));
    }, [setCart]);

    useEffect(() => {
        // Calculate and save the total amount to pay
        const calculatedAmountToPay = (total + shippingCharge - offer).toFixed(2);
        setTotalAmountToPay(calculatedAmountToPay);
        localStorage.setItem('totalAmountToPay', calculatedAmountToPay);

        // Save the subtotal to localStorage
        localStorage.setItem('subtotal', subtotal.toFixed(2));
    }, [total, shippingCharge, offer, subtotal]);

    const handlePayment = () => {
        if (!firstName || !lastName || !pincode || !address) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all required fields!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!bankDetails.cardNumber || !bankDetails.expirationDate || !bankDetails.cvv) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all payment details!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Add the items in the cart to recent purchases
        cart.forEach(item => addRecentPurchase(item));

        Swal.fire({
            title: 'Payment Successful!',
            text: 'Thank you for your purchase!',
            icon: 'success',
            confirmButtonText: 'Go to Home'
        }).then(() => {
            clearCart();
            navigate('/');
        });
    };

    return (
        <>
            <div className="checkout-container">
                <h2>Checkout</h2>

                {/* Shipping Information Section */}
                <form>
                    <div className="user-details-section">
                        <h3>Shipping Information</h3>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                                localStorage.setItem('firstName', e.target.value); // Save to localStorage
                            }}
                        />

                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value);
                                localStorage.setItem('lastName', e.target.value); // Save to localStorage
                            }}
                        />

                        <label>Pincode</label>
                        <input
                            type="number"
                            placeholder="Enter your pincode"
                            value={pincode}
                            onChange={(e) => {
                                setPincode(e.target.value);
                                localStorage.setItem('pincode', e.target.value); // Save to localStorage
                            }}
                        />

                        <label>Address</label>
                        <textarea
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                                localStorage.setItem('address', e.target.value); // Save to localStorage
                            }}
                            rows="4"
                        />
                    </div>

                    {/* Payment Information Section */}
                    <div className="payment-section">
                        <h3>Bank Details</h3>
                        <label>Card Number</label>
                        <input
                            type="text"
                            placeholder="Enter your card number"
                            value={bankDetails.cardNumber}
                            onChange={(e) => setBankDetails({ ...bankDetails, cardNumber: e.target.value })}
                        />

                        <label>Expiration Date</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={bankDetails.expirationDate}
                            onChange={(e) => setBankDetails({ ...bankDetails, expirationDate: e.target.value })}
                        />

                        <label>CVV</label>
                        <input
                            type="text"
                            placeholder="Enter CVV"
                            value={bankDetails.cvv}
                            onChange={(e) => setBankDetails({ ...bankDetails, cvv: e.target.value })}
                        />

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

                <div className="cart-summary-section">
                    <h3>Order Summary</h3>
                    {cart.length === 0 ? (
                        <p>No items in the cart.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} width="200px" height="150px" style={{marginTop:'10px'}} />
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <br /><br />
                <div className="SubTotle">
                    <div className="MyTotle">
                        <div className="P">
                            <p className='font'>Total: <b>₹{total.toFixed(2)}</b></p>
                            <p className='font'>Shipping Charge: <b>₹{shippingCharge.toFixed(2)}</b></p>
                            <p className='font'>Discount: <b>₹{offer.toFixed(2)}</b></p>
                            <p className='font'>Subtotal: <b>₹{storedSubtotal}.00</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default Checkout;
