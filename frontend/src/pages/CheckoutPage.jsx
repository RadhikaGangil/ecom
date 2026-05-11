import { useEffect, useState } from "react";

import axios from "axios";

function CheckoutPage() {

    const [cartItems, setCartItems] = useState([]);

    const [address, setAddress] = useState("");

    useEffect(() => {

        fetchCartItems();

    }, []);

    // FETCH CART ITEMS
    const fetchCartItems = async () => {

        try {

            const response = await axios.get(

                "http://localhost:8080/api/cart"
            );

            setCartItems(response.data);

        }
        catch (error) {

            console.log(error);
        }
    };

    // TOTAL PRICE
    const totalPrice = cartItems.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0
    );

    // PLACE ORDER
    const placeOrder = async () => {

        if (address === "") {

            alert("Please Enter Address");

            return;
        }

        try {

            await axios.post(

                "http://localhost:8080/api/orders",

                {
                    customerName: "Radhika",

                    address: address,

                    totalAmount: totalPrice,

                    paymentMethod: "Cash On Delivery"
                }
            );

            alert("Order Placed Successfully 🎉");

        }
        catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="container py-5">

            <h1
                className="text-center fw-bold mb-5"
            >

                Checkout 🛍️

            </h1>

            <div className="row">

                {/* LEFT SIDE */}

                <div className="col-md-7">

                    <div
                        className="card shadow border-0 p-4"
                        style={{
                            borderRadius: "20px"
                        }}
                    >

                        <h3
                            className="fw-bold mb-4"
                        >

                            Delivery Address

                        </h3>

                        <textarea

                            className="form-control"

                            rows="5"

                            placeholder="Enter Full Address"

                            value={address}

                            onChange={(e) =>

                                setAddress(e.target.value)
                            }
                        >

                        </textarea>

                        <h3
                            className="fw-bold mt-5 mb-4"
                        >

                            Payment Method

                        </h3>

                        <div
                            className="form-check mb-3"
                        >

                            <input

                                className="form-check-input"

                                type="radio"

                                checked
                                readOnly
                            />

                            <label
                                className="form-check-label"
                            >

                                Cash On Delivery
                            </label>

                        </div>

                        <div
                            className="form-check"
                        >

                            <input

                                className="form-check-input"

                                type="radio"
                            />

                            <label
                                className="form-check-label"
                            >

                                UPI / Card Payment
                            </label>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="col-md-5">

                    <div
                        className="card shadow border-0 p-4"
                        style={{
                            borderRadius: "20px"
                        }}
                    >

                        <h3
                            className="fw-bold mb-4"
                        >

                            Order Summary

                        </h3>

                        {

                            cartItems.map((item) => (

                                <div
                                    className="d-flex justify-content-between mb-3"
                                    key={item.id}
                                >

                                    <p>

                                        {item.productName}
                                    </p>

                                    <p>

                                        ₹ {item.price}
                                    </p>

                                </div>
                            ))
                        }

                        <hr />

                        <div
                            className="d-flex justify-content-between"
                        >

                            <h4
                                className="fw-bold"
                            >

                                Total

                            </h4>

                            <h4
                                className="fw-bold text-success"
                            >

                                ₹ {totalPrice}

                            </h4>

                        </div>

                        <button

                            className="btn btn-dark w-100 py-3 mt-4"

                            onClick={placeOrder}
                        >

                            Place Order 🚀

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CheckoutPage;