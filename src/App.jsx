
import { Route, Routes } from 'react-router-dom/dist';
import { Layout } from 'components/Layout';
import ContactForm from 'pages/ContactForm/ContactForm/ContactForm';
import  LoginPage  from 'pages/LoginPage';
import SignUp from 'pages/RegistrationPage';
import { PrivateRoute } from 'hok/PrivateRoute';
import { PublicRoute } from 'hok/PublicRoute';
import Home from 'pages/HomePage/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'Redux/Auth/operations';
 import { toast } from 'react-toastify';

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
			.unwrap()
			.catch(() => toast.error('Token is not exist'))
	}, [dispatch])
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='login' element={<PublicRoute><LoginPage /></PublicRoute>} />
                <Route path='registration' element={ <PublicRoute><SignUp /></PublicRoute>}/>
                <Route path='contacts' element={ <PrivateRoute><ContactForm /></PrivateRoute>}/>
				</Route>
			</Routes>
		</> 
	)
}
export default App;
