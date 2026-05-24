import { useCallback, useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] =
        useState(null);

    const fetchProduct = useCallback(async () => {

        try {

            const response =
                await axios.get(

                    `http://localhost:8080/api/products/${id}`
                );

            setProduct(response.data);

        }
        catch (error) {

            console.log(error);
        }
    }, [id]);

    useEffect(() => {

        fetchProduct();

    }, [fetchProduct]);

    if (!product) {

        return <h1>Loading...</h1>;
    }

    return (

        <div
            className="container py-5"
        >

            <div className="row align-items-center">

                {/* IMAGE */}

                <div className="col-md-6">

                    <img

                        src={product.imageUrl}

                        alt={product.name}

                        className="img-fluid shadow"

                        style={{

                            borderRadius: "20px",

                            width: "100%"
                        }}
                    />

                </div>

                {/* DETAILS */}

                <div className="col-md-6">

                    <h1
                        className="fw-bold"
                    >

                        {product.name}

                    </h1>

                    <p
                        className="mt-4 text-muted"
                    >

                        {product.description}

                    </p>

                    <h2
                        className="text-success mt-4"
                    >

                        ₹ {product.price}

                    </h2>

                    <h5
                        className="mt-3"
                    >

                        Stock:
                        {product.quantity}

                    </h5>

                    <button
                        className="btn btn-dark btn-lg mt-4 px-5"
                    >

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>
    );
}

export default ProductDetail;
