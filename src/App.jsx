//Components
import Index from "./pages/Index";
import Home from './pages/Home';
//Routes
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</div>
	);
};
export default App;
