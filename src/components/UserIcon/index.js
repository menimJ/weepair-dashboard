import React, { useState } from "react"
import Menu from "@material-ui/core/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"


const UserIcon = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () =>  setOpen(false);

  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
      <AccountCircle color="primary" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        // open={true}
        onClose={handleClose}
      >
        {/* <MenuItem>Profile</MenuItem> */}
        {/* <MenuItem>SIGN OUT</MenuItem> */}
      </Menu>
    </div>
  )
}

export default UserIcon
