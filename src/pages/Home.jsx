//Libs
import { useSelector, useDispatch } from "react-redux";
//Reducers
import { unSetUser } from '../reducers/user/userSlice';
//Routes
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate() 

	const handleLogout = () => {
    dispatch(unSetUser())
    navigate("/")    
  };

	return (
		<div>
			<h2>Home</h2>
			<p>Welcome {user.fullName} / {user.email} </p>
			<button className='btn btn-primary' onClick={handleLogout}>Log out</button>
			<br />
		</div>
	);
};

export default Home;
