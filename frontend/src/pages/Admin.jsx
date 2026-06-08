import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import {
    Trash2,
    PlusCircle,
    LayoutDashboard
} from "lucide-react";

function Admin() {

    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");

    const [description, setDescription] = useState("");

    const [price, setPrice] = useState("");

    const [quantity, setQuantity] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    // FETCH PRODUCTS
    const fetchProducts = useCallback(async () => {

        try {

            const response = await axios.get(

                "/api/products"
            );

            setProducts(response.data);

        }
        catch (error) {

            console.log(error);
        }
    }, []);

    useEffect(() => {

        fetchProducts();

    }, [fetchProducts]);

    // ADD PRODUCT
    const addProduct = async () => {

        // VALIDATION
        if (

            name === "" ||

            description === "" ||

            price === "" ||

            quantity === "" ||

            imageUrl === ""
        ) {

            alert("Please Fill All Fields");

            return;
        }

        try {

            const response = await axios.post(

                "/api/products",

                {
                    name: name,

                    description: description,

                    price: Number(price),

                    quantity: Number(quantity),

                    imageUrl: imageUrl
                }
            );

            console.log(response.data);

            alert("Product Added Successfully 🎉");

            // REFRESH PRODUCTS
            fetchProducts();

            // CLEAR FORM
            setName("");
            setDescription("");
            setPrice("");
            setQuantity("");
            setImageUrl("");

        }
        catch (error) {

            console.log(error);

            alert("Error Adding Product ❌");
        }
    };

    // DELETE PRODUCT
    const deleteProduct = async (id) => {

        try {

            await axios.delete(

                `/api/products/${id}`
            );

            alert("Product Deleted ❌");

            fetchProducts();

        }
        catch (error) {

            console.log(error.response);
        }
    };

    return (

        <div
            className="min-vh-100"
            style={{
                background: "#f5f7fb"
            }}
        >

            {/* TOP NAVBAR */}

            <div
                className="d-flex justify-content-between align-items-center px-5 py-4 bg-white shadow-sm"
            >

                <div
                    className="d-flex align-items-center gap-3"
                >

                    <LayoutDashboard size={35} />

                    <h2
                        className="fw-bold m-0"
                    >

                        Admin Dashboard

                    </h2>

                </div>

                <button
                    className="btn btn-dark px-4 py-2 rounded-pill"
                >

                    Logout

                </button>

            </div>

            <div className="container-fluid py-5 px-5">

                <div className="row">

                    {/* LEFT SIDE */}

                    <div className="col-lg-4 mb-5">

                        <div
                            className="card border-0 shadow-lg p-4"
                            style={{
                                borderRadius: "25px"
                            }}
                        >

                            <h1
                                className="fw-bold mb-4"
                            >

                                Add Product
                            </h1>

                            {/* PRODUCT NAME */}

                            <input

                                type="text"

                                placeholder="Product Name"

                                className="form-control p-3 mb-3"

                                value={name}

                                onChange={(e) =>

                                    setName(e.target.value)
                                }
                            />

                            {/* DESCRIPTION */}

                            <textarea

                                placeholder="Description"

                                className="form-control p-3 mb-3"

                                rows="5"

                                value={description}

                                onChange={(e) =>

                                    setDescription(e.target.value)
                                }
                            >

                            </textarea>

                            {/* PRICE */}

                            <input

                                type="number"

                                placeholder="Price"

                                className="form-control p-3 mb-3"

                                value={price}

                                onChange={(e) =>

                                    setPrice(e.target.value)
                                }
                            />

                            {/* QUANTITY */}

                            <input

                                type="number"

                                placeholder="Quantity"

                                className="form-control p-3 mb-3"

                                value={quantity}

                                onChange={(e) =>

                                    setQuantity(e.target.value)
                                }
                            />

                            {/* IMAGE URL */}

                            <input

                                type="text"

                                placeholder="Image URL"

                                className="form-control p-3 mb-4"

                                value={imageUrl}

                                onChange={(e) =>

                                    setImageUrl(e.target.value)
                                }
                            />

                            {/* ADD BUTTON */}

                            <button

                                className="btn btn-dark w-100 py-3 rounded-pill fw-bold"

                                onClick={addProduct}
                            >

                                <PlusCircle
                                    size={20}
                                    className="me-2"
                                />

                                Add Product

                            </button>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="col-lg-8">

                        <div className="row">

                            {

                                products.map((product) => (

                                    <div
                                        className="col-md-6 mb-4"
                                        key={product.id}
                                    >

                                        <div
                                            className="card border-0 shadow-lg h-100"
                                            style={{
                                                borderRadius: "25px"
                                            }}
                                        >

                                            {/* IMAGE */}

                                            <img

                                                src={product.imageUrl}

                                                alt={product.name}

                                                className="card-img-top"

                                                style={{

                                                    height: "250px",

                                                    objectFit: "cover",

                                                    borderTopLeftRadius: "25px",

                                                    borderTopRightRadius: "25px"
                                                }}
                                            />

                                            {/* BODY */}

                                            <div className="card-body p-4">

                                                <h3
                                                    className="fw-bold"
                                                >

                                                    {product.name}

                                                </h3>

                                                <p
                                                    className="text-muted"
                                                >

                                                    {product.description}

                                                </p>

                                                <h4
                                                    className="text-success fw-bold"
                                                >

                                                    ₹ {product.price}

                                                </h4>

                                                <p>

                                                    Stock:
                                                    {product.quantity}

                                                </p>

                                                {/* DELETE BUTTON */}

                                                <button

                                                    className="btn btn-danger rounded-pill px-4 mt-3"

                                                    onClick={() =>

                                                        deleteProduct(
                                                            product.id
                                                        )
                                                    }
                                                >

                                                    <Trash2
                                                        size={18}
                                                    />

                                                </button>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Admin;
