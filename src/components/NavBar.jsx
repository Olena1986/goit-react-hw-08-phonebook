import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { authEmail, isAuth } from 'Redux/Auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'Redux/Auth/operations';


export default function BasicMenu() {

  const userEmail = useSelector(authEmail);
  const isAuthLog = useSelector(isAuth)
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate=useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{navigate('/')}}>Home</MenuItem>
        {isAuthLog ?
          <div>
          <MenuItem >{`Welcome ${userEmail}`}</MenuItem>
          <MenuItem onClick={() => dispatch(logoutThunk())} >Logout</MenuItem>
          </div>
          : <MenuItem onClick={() => { navigate('/login') }}>Login</MenuItem>}
      </Menu>
    </div>
  );
}