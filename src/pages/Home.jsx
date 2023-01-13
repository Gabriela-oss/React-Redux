//Libs
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
//Reducers
import { unSetUser } from "../reducers/user/userSlice";
//Routes
import { useNavigate } from "react-router-dom";
//components
import ProductsList from "../components/ProductsList";

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [products, setProducts] = useState([]);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		Axios.get("https://reqres.in/api/products").then((response) => {
			setProducts(response.data.data);
		});
	}, []);

	const handleLogout = () => {
		dispatch(unSetUser());
		navigate("/");
	};

	return (
		<div>
			<h2>Home</h2>
			<p>
				Welcome {user.fullName} / {user.email}{" "}
			</p>
			<button className='btn btn-primary' onClick={handleLogout}>
				Log out
			</button>
			<ProductsList products={products}/>
			<br />
		</div>
	);
};

export default Home;
