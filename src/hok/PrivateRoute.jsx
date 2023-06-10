import { useSelector } from 'react-redux';
import { isAuth } from 'Redux/Auth/authSelectors.js';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute = ({ children }) => {
	const isAuthUser= useSelector(isAuth)
	const location = useLocation()
	if (!isAuthUser) {
		return <Navigate to='/login' state={{ from: location.pathname }} />
	}
	return children
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};