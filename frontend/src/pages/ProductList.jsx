// import { useEffect, useState } from "react";

// import axios from "axios";

// import { useNavigate } from "react-router-dom";

// function ProductList() {

//     const navigate = useNavigate();

//     const [products, setProducts] = useState([]);

//     useEffect(() => {

//         fetchProducts();

//     }, []);

//     // FETCH PRODUCTS
//     const fetchProducts = async () => {

//         try {

//             const response = await axios.get(

//                 "http://localhost:8080/api/products"
//             );

//             setProducts(response.data);

//         }
//         catch (error) {

//             console.log(error);
//         }
//     };

//     // ADD TO CART
//     const addToCart = async (product) => {

//         try {

//             await axios.post(

//                 "http://localhost:8080/api/cart",

//                 {
//                     productName: product.name,

//                     price: product.price,

//                     quantity: 1,

//                     imageUrl: product.imageUrl
//                 }
//             );

//             alert("Product Added To Cart 🛒");

//         }
//         catch (error) {

//             console.log(error);
//         }
//     };

//     return (

//         <div className="container py-5">

//             {/* TOP SECTION */}

//             <div
//                 className="d-flex justify-content-between align-items-center mb-5"
//             >

//                 <h1 className="fw-bold">

//                     Trending Products 🔥

//                 </h1>

//                 {/* CART BUTTON */}

//                 <button

//                     className="btn btn-dark px-4 py-2"

//                     onClick={() => navigate("/cart")}
//                 >

//                     Go To Cart 🛒

//                 </button>

//             </div>

//             {/* PRODUCT ROW */}

//             <div className="row">

//                 {

//                     products.map((product) => (

//                         <div
//                             className="col-md-4 mb-4"
//                             key={product.id}
//                         >

//                             <div
//                                 className="card shadow h-100 border-0"
//                                 style={{
//                                     borderRadius: "20px"
//                                 }}
//                             >

//                                 {/* PRODUCT IMAGE */}

//                                 <img

//                                     src={product.imageUrl}

//                                     className="card-img-top"

//                                     alt={product.name}

//                                     style={{

//                                         height: "250px",

//                                         objectFit: "cover",

//                                         borderTopLeftRadius: "20px",

//                                         borderTopRightRadius: "20px"
//                                     }}
//                                 />

//                                 {/* CARD BODY */}

//                                 <div className="card-body">

//                                     <h4 className="fw-bold">

//                                         {product.name}

//                                     </h4>

//                                     <p>

//                                         {product.description}

//                                     </p>

//                                     <h3 className="text-success">

//                                         ₹ {product.price}

//                                     </h3>

//                                     <p>

//                                         Stock:
//                                         {product.quantity}

//                                     </p>

//                                     {/* ADD TO CART BUTTON */}

//                                     <button

//                                         className="btn btn-success w-100 mb-2"

//                                         onClick={() =>

//                                             addToCart(product)
//                                         }
//                                     >

//                                         Add To Cart 🛒

//                                     </button>

//                                     {/* VIEW DETAILS BUTTON */}

//                                     <button

//                                         className="btn btn-dark w-100"

//                                         onClick={() =>

//                                             navigate(

//                                                 `/products/${product.id}`
//                                             )
//                                         }
//                                     >

//                                         View Details

//                                     </button>

//                                 </div>

//                             </div>

//                         </div>
//                     ))
//                 }

//             </div>

//         </div>
//     );
// }

// export default ProductList;
import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function ProductList() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchProducts();

    }, []);

    // FETCH PRODUCTS
    const fetchProducts = async () => {

        try {

            const response = await axios.get(

                "http://localhost:8080/api/products"
            );

            setProducts(response.data);

            setFilteredProducts(response.data);

        }
        catch (error) {

            console.log(error);
        }
    };

    // SEARCH PRODUCT
    const handleSearch = (value) => {

        setSearch(value);

        const filtered = products.filter((product) =>

            product.name

                .toLowerCase()

                .includes(

                    value.toLowerCase()
                )
        );

        setFilteredProducts(filtered);
    };

    // FILTER BY PRICE
    const filterByPrice = (type) => {

        if (type === "low") {

            const sorted = [...filteredProducts]

                .sort((a, b) =>

                    a.price - b.price
                );

            setFilteredProducts(sorted);
        }

        if (type === "high") {

            const sorted = [...filteredProducts]

                .sort((a, b) =>

                    b.price - a.price
                );

            setFilteredProducts(sorted);
        }
    };

    // ADD TO CART
    const addToCart = async (product) => {

        try {

            await axios.post(

                "http://localhost:8080/api/cart",

                {
                    productName: product.name,

                    price: product.price,

                    quantity: 1,

                    imageUrl: product.imageUrl
                }
            );

            alert("Product Added To Cart 🛒");

        }
        catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="container py-5">

            {/* TOP SECTION */}

            <div
                className="d-flex justify-content-between align-items-center mb-5"
            >

                <h1 className="fw-bold">

                    Trending Products 🔥

                </h1>

                {/* CART BUTTON */}

                <button

                    className="btn btn-dark px-4 py-2"

                    onClick={() => navigate("/cart")}
                >

                    Go To Cart 🛒

                </button>

            </div>

            {/* SEARCH + FILTER */}

            <div
                className="row mb-5"
            >

                <div className="col-md-8">

                    <input

                        type="text"

                        placeholder="Search Products..."

                        className="form-control p-3"

                        value={search}

                        onChange={(e) =>

                            handleSearch(e.target.value)
                        }
                    />

                </div>

                <div className="col-md-4">

                    <select

                        className="form-select p-3"

                        onChange={(e) =>

                            filterByPrice(e.target.value)
                        }
                    >

                        <option>

                            Filter By Price

                        </option>

                        <option value="low">

                            Low To High

                        </option>

                        <option value="high">

                            High To Low

                        </option>

                    </select>

                </div>

            </div>

            {/* PRODUCT ROW */}

            <div className="row">

                {

                    filteredProducts.map((product) => (

                        <div
                            className="col-md-4 mb-4"
                            key={product.id}
                        >

                            <div
                                className="card shadow h-100 border-0"
                                style={{
                                    borderRadius: "20px"
                                }}
                            >

                                {/* PRODUCT IMAGE */}

                                <img

                                    src={product.imageUrl}

                                    className="card-img-top"

                                    alt={product.name}

                                    style={{

                                        height: "250px",

                                        objectFit: "cover",

                                        borderTopLeftRadius: "20px",

                                        borderTopRightRadius: "20px"
                                    }}
                                />

                                {/* CARD BODY */}

                                <div className="card-body">

                                    <h4 className="fw-bold">

                                        {product.name}

                                    </h4>

                                    <p>

                                        {product.description}

                                    </p>

                                    <h3 className="text-success">

                                        ₹ {product.price}

                                    </h3>

                                    <p>

                                        Stock:
                                        {product.quantity}

                                    </p>

                                    {/* ADD TO CART BUTTON */}

                                    <button

                                        className="btn btn-success w-100 mb-2"

                                        onClick={() =>

                                            addToCart(product)
                                        }
                                    >

                                        Add To Cart 🛒

                                    </button>

                                    {/* VIEW DETAILS BUTTON */}

                                    <button

                                        className="btn btn-dark w-100"

                                        onClick={() =>

                                            navigate(

                                                `/products/${product.id}`
                                            )
                                        }
                                    >

                                        View Details

                                    </button>

                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default ProductList;