import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <div className="container text-center mt-5">

            <h1>

                Admin Dashboard 🔥

            </h1>

            <p>

                Welcome Admin

            </p>

            <button

                className="btn btn-dark"

                onClick={handleLogout}
            >

                Logout

            </button>

        </div>
    );
}

export default Admin;