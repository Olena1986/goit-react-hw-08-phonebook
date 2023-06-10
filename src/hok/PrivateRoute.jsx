import { useSelector } from 'react-redux';
import { tokenSelector } from 'Redux/Auth/authSelectors.js';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';


export const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector(tokenSelector)
	const location = useLocation()
	if (!isLoggedIn) {
		return <Navigate to='/login' state={{ from: location.pathname }} />
	}
	return children
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};