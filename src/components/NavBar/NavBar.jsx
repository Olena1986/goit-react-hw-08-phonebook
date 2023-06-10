import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { authEmail, isAuth } from 'Redux/Auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'Redux/Auth/operations';
import { NavStyle } from './NavBar.styled';


export default function BasicMenu() {

  const userEmail = useSelector(authEmail);
  const isAuthLog = useSelector(isAuth)
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate=useNavigate()
  const location = useLocation();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleContactClick = () => {
    navigate('/contacts');
    handleClose();
  };
  const isActivePage = (path) => {
    return location.pathname === path;
  };
  return (
    <div>
      {isAuthLog ? (
  <NavStyle.NavForm>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      Menu
    </Button>
    <NavStyle.NavMess>{`Welcome ${userEmail}`}</NavStyle.NavMess>
  </NavStyle.NavForm>
) : (
  <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      Menu
    </Button>
)}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{navigate('/')}} selected={isActivePage('/')}>Home</MenuItem>
        {isAuthLog ?
          <div>
          <MenuItem onClick={handleContactClick} selected={isActivePage('/contacts')}>My Contacts</MenuItem>
          <MenuItem onClick={() => dispatch(logoutThunk())} >Logout</MenuItem>
          </div>
          : <MenuItem onClick={() => { navigate('/login') }}>Login</MenuItem>}
      </Menu>
    </div>
  );
}