import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"


import { useHistory } from "react-router-dom"

import { createGroup } from "../../api/groups"
// import GroupCreated from "../GroupCreated"
import { HOME } from "../../urls"
import { handleNotification } from "../../utils/general"
import Loading from "../Loading"


const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: "2.45rem",
      fontWeight: "400",
      letterSpacing: "0",
      lineHeight: "3.25rem",
      paddingBottom: ".5em",
    },
    centerText: {
      textAlign: "center",
    },
  }))


export default function CreateDialog({ open, handleClose }) {
  const history = useHistory()
  const [data, setData] = React.useState({
    username: "",
    name: "",
  })

  const [state, setState] = React.useState({
    created: false,
    loading: false,
    groupId: "",
  })

  const handleUserInput = (name) => (event) =>
    setData({ ...data, [name]: event.target.value })

  const success = (groupID) => {
    console.log("success")
    setState({
      ...state,
      created: true,
      loading: false,
      groupId: groupID,
    })
  }

  const failed = (message) => {
    handleNotification("ERROR", message)
    history.push(HOME)
  }

  const handleCreateGroup = () => {
    setState({
      ...state,
      loading: true,
    })
    createGroup(data, success, failed)
  }

  const clearGroupID = ()=>{
    setState({
        ...state,
        created: false,
        groupId: "",
      })
      handleClose()
  }

function GroupCreated({ clearGroupID, groupId }) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true)
  
    const handleClickOpen = () => {
      setOpen(true)
    }
  
    return (
      <div>
        <Dialog
          open={open}
          fullWidth={true}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <div className={classes.centerText}>{"Please copy your Group ID"}</div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography
                variant="h6"
                className={clsx(classes.title, classes.centerText)}
              >
                {groupId}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={clearGroupID} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }


  return state.created ? (
    <GroupCreated clearGroupID={clearGroupID} groupId={state.groupId} />
  ) : (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please enter your prefred username and group name, give us a couple
            seconds and your group id will be generated.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            value={data.username}
            required
            onChange={handleUserInput("username")}
          />
          <TextField
            margin="normal"
            id="name"
            label="Group Name"
            type="text"
            fullWidth
            value={data.name}
            required
            onChange={handleUserInput("name")}
          />
        </DialogContent>
        <DialogActions>
          {state.loading ? (
            <Loading />
          ) : (
            <React.Fragment>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCreateGroup} color="primary">
                Create
              </Button>
            </React.Fragment>
          )}
        </DialogActions>
      </Dialog>
    </div>
  )
}
