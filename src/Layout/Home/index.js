import React, { useState } from "react"
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import img from "../../Img/gifts.jpg"
import NavBar from "../../components/NavBar"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import AddIcon from '@material-ui/icons/Add';
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import SendIcon from "@material-ui/icons/Send"
import GroupIcon from '@material-ui/icons/Group';


import {storeGroupID} from "../../localStorage/groups"
import { useHistory } from "react-router-dom";
import {JOIN,CREATE} from "../../urls"

import CreateDialog from "../../components/CreateDialog"


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.45rem",
    fontWeight: "400",
    letterSpacing: "0",
    lineHeight: "3.25rem",
    paddingBottom: ".5em",
  },

  paragraph: {
    lineHeight: "1.5rem",
    paddingBottom: ".5em",
    textAlign: "justify",
  },

  layout: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: theme.spacing(2),
    },
    alignItems: "center",
    gap: theme.spacing(2),
  },

  image: {
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      objectFit: "cover",
    },
  },

  postion: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
  },
  content: {
    textAlign: "left",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  buttonLayout: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-start",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  formWidth: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}))

export default function Home() {
  const classes = useStyles()
  const [openDialog,setOpenDialog]= React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [groupId, setGroupId] = useState("")
  const open = Boolean(anchorEl)
  let history = useHistory();
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    storeGroupID("groupId",groupId)
    history.push(JOIN)
  }

  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  const handleChange = (event) => setGroupId(event.target.value)

  const handleClickOpen = () => {
    handleClose()
    console.log(openDialog,"openDialog")
    setOpenDialog(true);
  }

  const handleCloseDialgue = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <CreateDialog open={openDialog} handleClose={handleCloseDialgue}/>
      <NavBar />
      <Container maxWidth="lg">
        <section className={classes.layout}>
          <div className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              Maybe it's a special day for secret santa
            </Typography>
            <Typography variant="p" className={classes.paragraph}>
              We, know it can be very hard connecting with your collegues remotely so
              we designed this specially for you.
            </Typography>
            <Typography variant="p" className={classes.paragraph}>
              We, know it can be very hard connecting with your collegues remotely so
              we designed this specially for you.
            </Typography>
            <Typography variant="p" className={classes.paragraph}>
              We, know it can be very hard connecting with your collegues remotely so
              we designed this specially for you.
            </Typography>

            <div className={classes.buttonLayout}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                disableElevation
                onClick={handleMenu}
            
              >
                GROUP
              </Button>
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
                open={open}
                onClose={handleClose}
              >
                <MenuItem  onClick={handleClickOpen}>
                  <ListItemIcon>
                    <AddIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Create Group" />
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <GroupIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Manage Group" />
                </MenuItem>
              </Menu>
              <FormControl className={classes.formWidth} variant="outlined">
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="GROUP ID"
                    id="outlined-start-adornment"
                    style={{ width: "100%" }}
                    value={groupId}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyboardIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </form>
              </FormControl>
            </div>
          </div>
          <div className={classes.postion}>
            <img className={classes.image} src={img} alt="gifts" />
          </div>
        </section>
      </Container>
    </div>
  )
}
