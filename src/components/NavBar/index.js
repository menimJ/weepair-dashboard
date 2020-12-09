import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import FormDialog from "../FormDialog"
import { Link } from "react-router-dom"
import { HOME } from "../../urls"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  split: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },

  pointer: {
    cursor: "pointer",
    fontSize: "0.9rem",
    lineSpacing: "0.1",
  },

  removeDefault: {
    textDecoration: "none",
    color: "rgb(45, 45, 45)",
    "&:hover": {
      textDecoration: "none",
      color: "rgb(45, 45, 45)",
    },
  },
}))

export default function NavBar() {
  const [open, setOpen] = React.useState(false)
  // const [navOpen,setNavOpen] = React.useState(false)
  // const [anchorEl, setAnchorEl] = React.useState(null);
  
  const classes = useStyles()
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <FormDialog open={open} handleClose={handleClose} />
      <div className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.removeDefault} to={HOME}>
              WEEPAIR
            </Link>
          </Typography>

          <Button
            variant="outlined"
            size="medium"
            color="secondary"
            onClick={handleClickOpen}
          >
            VIEW MATCH
          </Button>
        </Toolbar>
      </div>
    </React.Fragment>
  )
}
