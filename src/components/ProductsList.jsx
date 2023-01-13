import {
	addProductToCart,
	removeProductFromCart,
} from "../reducers/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = ({ products }) => {
	const dispatch = useDispatch();
	const { productsList } = useSelector((state) => state.cart);

	const handleAddOrRemoveProduct = (productId) => {
		const product = products.find((product) => product.id === productId);
		if (productsList.find((pdt) => pdt.id === product.id)) {
			dispatch(removeProductFromCart(productId));
		} else {
			dispatch(addProductToCart(product));
		}
	};

	return (
		<div>
			<h2>Listado de Productos</h2>
			<div className='row'>
				{products.map((product) => {
					return (
						<div key={product.id} className='col-3 mt-3'>
							<h4>{product.name}</h4>
							<p>
								<b>Price</b>${product.year}{" "}
							</p>
							<p>
								<b>Category</b> {product.color}{" "}
							</p>
							<button
								className = {`btn ${productsList.find((pdt) => pdt.id === product.id) ? "btn-danger" : "btn-success"} `}
								onClick={() => handleAddOrRemoveProduct(product.id)}
							>
								{productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to cart
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductsList;
