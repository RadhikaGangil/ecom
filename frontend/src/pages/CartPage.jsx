import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function CartPage() {

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    // FETCH CART ITEMS
    const fetchCartItems = useCallback(async () => {

        try {

            const response = await axios.get(

                "http://localhost:8080/api/cart"
            );

            setCartItems(response.data);

        }
        catch (error) {

            console.log(error);
        }
    }, []);

    useEffect(() => {

        fetchCartItems();

    }, [fetchCartItems]);

    // REMOVE ITEM
    const removeItem = async (id) => {

        try {

            await axios.delete(

                `http://localhost:8080/api/cart/${id}`
            );

            alert("Item Removed ❌");

            fetchCartItems();

        }
        catch (error) {

            console.log(error);
        }
    };

    // UPDATE QUANTITY
    const updateQuantity = async (

        item,

        newQuantity

    ) => {

        // PREVENT 0
        if (newQuantity < 1) {

            return;
        }

        try {

            await axios.put(

                `http://localhost:8080/api/cart/${item.id}`,

                {

                    productName: item.productName,

                    price: item.price,

                    quantity: newQuantity,

                    imageUrl: item.imageUrl
                }
            );

            // REFRESH CART
            fetchCartItems();

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

    return (

        <div
            className="container py-5"
        >

            {/* HEADING */}

            <div
                className="d-flex justify-content-between align-items-center mb-5"
            >

                <h1
                    className="fw-bold"
                >

                    My Cart 🛒

                </h1>

                <button

                    className="btn btn-dark px-4 py-2"

                    onClick={() => navigate("/products")}
                >

                    Continue Shopping 🛍️

                </button>

            </div>

            <div className="row">

                {/* LEFT SIDE */}

                <div className="col-md-8">

                    {

                        cartItems.length === 0

                            ?

                            (

                                <h3>

                                    Cart Is Empty 😢

                                </h3>
                            )

                            :

                            (

                                cartItems.map((item) => (

                                    <div

                                        className="card mb-4 shadow border-0"

                                        key={item.id}

                                        style={{

                                            borderRadius: "20px"
                                        }}
                                    >

                                        <div className="row g-0">

                                            {/* IMAGE */}

                                            <div className="col-md-4">

                                                <img

                                                    src={item.imageUrl}

                                                    alt={item.productName}

                                                    className="img-fluid h-100"

                                                    style={{

                                                        objectFit: "cover",

                                                        borderTopLeftRadius: "20px",

                                                        borderBottomLeftRadius: "20px"
                                                    }}
                                                />

                                            </div>

                                            {/* DETAILS */}

                                            <div className="col-md-8">

                                                <div className="card-body p-4">

                                                    <h3
                                                        className="fw-bold"
                                                    >

                                                        {item.productName}

                                                    </h3>

                                                    <h4
                                                        className="text-success my-3"
                                                    >

                                                        ₹ {item.price}

                                                    </h4>

                                                    {/* QUANTITY BUTTONS */}

                                                    <div
                                                        className="d-flex align-items-center mt-3"
                                                    >

                                                        <button

                                                            className="btn btn-dark"

                                                            onClick={() =>

                                                                updateQuantity(

                                                                    item,

                                                                    item.quantity - 1
                                                                )
                                                            }
                                                        >

                                                            -

                                                        </button>

                                                        <h5
                                                            className="mx-3 mt-2"
                                                        >

                                                            {item.quantity}

                                                        </h5>

                                                        <button

                                                            className="btn btn-dark"

                                                            onClick={() =>

                                                                updateQuantity(

                                                                    item,

                                                                    item.quantity + 1
                                                                )
                                                            }
                                                        >

                                                            +

                                                        </button>

                                                    </div>

                                                    {/* REMOVE BUTTON */}

                                                    <button

                                                        className="btn btn-danger mt-4"

                                                        onClick={() =>

                                                            removeItem(item.id)
                                                        }
                                                    >

                                                        Remove ❌

                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            )
                    }

                </div>

                {/* RIGHT SIDE */}

                <div className="col-md-4">

                    <div
                        className="card shadow border-0 p-4"
                        style={{
                            borderRadius: "20px"
                        }}
                    >

                        <h2
                            className="fw-bold mb-4"
                        >

                            Price Details

                        </h2>

                        <div
                            className="d-flex justify-content-between mb-3"
                        >

                            <h5>

                                Total Items

                            </h5>

                            <h5>

                                {cartItems.length}

                            </h5>

                        </div>

                        <div
                            className="d-flex justify-content-between mb-4"
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

                        {/* CHECKOUT BUTTON */}

                        <button

                            className="btn btn-dark w-100 py-3"

                            onClick={() => navigate("/checkout")}
                        >

                            Proceed To Checkout 🚀

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CartPage;
