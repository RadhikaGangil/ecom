import { useEffect, useState } from "react";

import axios from "axios";

import {
    Package,
    MapPin,
    CreditCard
} from "lucide-react";

function OrdersPage() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    // FETCH ORDERS
    const fetchOrders = async () => {

        try {

            const response = await axios.get(

                "http://localhost:8080/api/orders"
            );

            console.log(response.data);

            setOrders(response.data);

        }
        catch (error) {

            console.log(error);
        }
    };

    return (

        <div
            className="min-vh-100 py-5"
            style={{
                background: "#f5f5f5"
            }}
        >

            <div className="container">

                {/* TITLE */}

                <h1
                    className="fw-bold text-center mb-5"
                    style={{
                        fontSize: "55px"
                    }}
                >

                    My Orders 📦

                </h1>

                {

                    orders.length === 0

                        ?

                        (

                            <div
                                className="text-center mt-5"
                            >

                                <img

                                    src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"

                                    alt="empty"

                                    width="180"
                                />

                                <h2
                                    className="mt-4 fw-bold"
                                >

                                    No Orders Yet

                                </h2>

                                <p
                                    className="text-muted"
                                >

                                    Your placed orders will appear here.

                                </p>

                            </div>
                        )

                        :

                        (

                            <div className="row">

                                {

                                    orders.map((order) => (

                                        <div
                                            className="col-md-6 mb-4"
                                            key={order.id}
                                        >

                                            <div
                                                className="card border-0 shadow-lg p-4"
                                                style={{
                                                    borderRadius: "25px"
                                                }}
                                            >

                                                {/* TOP */}

                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >

                                                    <div>

                                                        <h3
                                                            className="fw-bold"
                                                        >

                                                            Order #{order.id}

                                                        </h3>

                                                        <p
                                                            className="text-muted"
                                                        >

                                                            Successfully Placed ✅

                                                        </p>

                                                    </div>

                                                    <div
                                                        className="bg-success text-white px-3 py-2 rounded-pill"
                                                    >

                                                        Paid

                                                    </div>

                                                </div>

                                                <hr />

                                                {/* CUSTOMER */}

                                                <div
                                                    className="d-flex align-items-center gap-3 mb-3"
                                                >

                                                    <Package size={24} />

                                                    <div>

                                                        <h6
                                                            className="m-0"
                                                        >

                                                            Customer

                                                        </h6>

                                                        <p
                                                            className="m-0 text-muted"
                                                        >

                                                            {order.customerName}

                                                        </p>

                                                    </div>

                                                </div>

                                                {/* ADDRESS */}

                                                <div
                                                    className="d-flex align-items-center gap-3 mb-3"
                                                >

                                                    <MapPin size={24} />

                                                    <div>

                                                        <h6
                                                            className="m-0"
                                                        >

                                                            Delivery Address

                                                        </h6>

                                                        <p
                                                            className="m-0 text-muted"
                                                        >

                                                            {order.address}

                                                        </p>

                                                    </div>

                                                </div>

                                                {/* PAYMENT */}

                                                <div
                                                    className="d-flex align-items-center gap-3 mb-4"
                                                >

                                                    <CreditCard size={24} />

                                                    <div>

                                                        <h6
                                                            className="m-0"
                                                        >

                                                            Payment Method

                                                        </h6>

                                                        <p
                                                            className="m-0 text-muted"
                                                        >

                                                            {order.paymentMethod}

                                                        </p>

                                                    </div>

                                                </div>

                                                {/* TOTAL */}

                                                <div
                                                    className="d-flex justify-content-between align-items-center"
                                                >

                                                    <h4
                                                        className="fw-bold"
                                                    >

                                                        Total Amount

                                                    </h4>

                                                    <h3
                                                        className="fw-bold text-success"
                                                    >

                                                        ₹ {order.totalAmount}

                                                    </h3>

                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        )
                }

            </div>

        </div>
    );
}

export default OrdersPage;