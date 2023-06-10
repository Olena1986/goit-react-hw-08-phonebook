import { useSelector } from 'react-redux';
import { tokenSelector } from 'Redux/Auth/authSelectors.js';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
	const isAuth = useSelector(tokenSelector)
	if (isAuth) {
		return <Navigate to='/contacts' />
	}
	return children
}

PublicRoute.propTypes = {
	children: PropTypes.node.isRequired,
};