import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <div
            style={{
                backgroundColor: "#f3f3f3",
                minHeight: "100vh"
            }}
        >

            {/* NAVBAR */}

            <nav
                className="navbar navbar-expand-lg px-4 py-3"
                style={{
                    backgroundColor: "#131921"
                }}
            >

                <div className="container-fluid">

                    <h2
                        style={{
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >

                        ShopEase 🛒

                    </h2>

                    <div>

                        <button

                            className="btn btn-warning fw-bold me-3"

                            onClick={() => navigate("/products")}
                        >

                            Products

                        </button>

                        <button

                            className="btn btn-danger fw-bold"

                            onClick={handleLogout}
                        >

                            Logout

                        </button>

                    </div>

                </div>

            </nav>

            {/* HERO SECTION */}

            <div
                className="container-fluid text-white d-flex align-items-center"

                style={{

                    minHeight: "500px",

                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop')",

                    backgroundSize: "cover",

                    backgroundPosition: "center"
                }}
            >

                <div className="container">

                    <h1
                        style={{
                            fontSize: "70px",
                            fontWeight: "bold",
                            textShadow: "2px 2px 10px black"
                        }}
                    >

                        Big Summer Sale 🔥

                    </h1>

                    <p
                        style={{
                            fontSize: "24px",
                            maxWidth: "600px",
                            textShadow: "2px 2px 10px black"
                        }}
                    >

                        Discover trending products,
                        amazing deals and premium
                        shopping experience.

                    </p>

                    <button

                        className="btn btn-warning btn-lg fw-bold mt-3 px-5"

                        onClick={() => navigate("/products")}
                    >

                        Shop Now

                    </button>

                </div>

            </div>

            {/* CATEGORY SECTION */}

            <div className="container py-5">

                <h2 className="fw-bold mb-5 text-center">

                    Shop By Category

                </h2>

                <div className="row g-4">

                    {/* CATEGORY 1 */}

                    <div className="col-md-3">

                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden"
                            }}
                        >

                            <img
                                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">

                                    Mobiles

                                </h4>

                            </div>

                        </div>

                    </div>

                    {/* CATEGORY 2 */}

                    <div className="col-md-3">

                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden"
                            }}
                        >

                            <img
                                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">

                                    Laptops

                                </h4>

                            </div>

                        </div>

                    </div>

                    {/* CATEGORY 3 */}

                    <div className="col-md-3">

                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden"
                            }}
                        >

                            <img
                                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">

                                    Headphones

                                </h4>

                            </div>

                        </div>

                    </div>

                    {/* CATEGORY 4 */}

                    <div className="col-md-3">

                        <div
                            className="card shadow border-0 h-100"
                            style={{
                                borderRadius: "20px",
                                overflow: "hidden"
                            }}
                        >

                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                                className="card-img-top"
                                style={{
                                    height: "250px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4 className="fw-bold">

                                    Watches

                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;