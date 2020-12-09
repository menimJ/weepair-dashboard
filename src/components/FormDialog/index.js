import React from "react"
// material ui imports
import Button from "@material-ui/core/Button"
import CheckIcon from "@material-ui/icons/Check"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Fab from "@material-ui/core/Fab"
import { green } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { Typography } from "@material-ui/core"
// relative imports
import Loading from "../Loading"
import { viewMatch } from "../../api/groups"
// 3rd party
import { handleNotification } from "../../utils/general"

const useStyles = makeStyles((theme) => ({
  title: {
    display: "inline",
  },

  removeDecoration: {
    // color:"#333",
    textDecoration: "none",
    "&:hover": {
      // color:"#333"
    },
  },

  buttonProgress: {
    backgroundColor: green[500],
    width: "8rem",
    height: "8rem",
    marginBottom: theme.spacing(3),
    "&:hover": {
      backgroundColor: green[500],
    },
  },

  fab: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  height: {
    width: "100%",
    height: "10rem",
  },

  center: {
    textAlign: "center",
  },
}))
export default function FormDialog({ open, handleClose }) {
  const classes = useStyles()
  const [data, setData] = React.useState({
    username: "",
    groupID: "",
  })
  const [state, setState] = React.useState({
    loading: false,
    pairInfo: false,
    partnerInfo: {
      name: "",
      comment: "",
      link: "",
    },
  })

  const loadData = () => {
    setState({ ...state, loading: true })
    console.log({ username: data.username, groupID: data.groupID })

    const details = {
      username: data.username,
      groupID: data.groupID,
    }
    viewMatch(details, success, failed)
    // setTimeout(() => setState(...state, (state.loading = false)), 5000)
  }

  const handleUserInput = (name) => (event) =>
    setData({ ...data, [name]: event.target.value })

  const success = (name, comment, link) => {
    setState({
      ...state,
      loading: false,
      pairInfo: true,
      partnerInfo: {
        name,
        comment,
        link,
      },
    })
    handleNotification("success", "izz working oon", "success")
  }
  const failed = (message) => {
    handleNotification("FAILED", message)
    setState({ ...state, loading: false })
  }

  const PairInfo = ({ name, comment, link }) => {
    // const { name, comment, link } = state.partnerInfo
    console.log(name, comment, link, "working")
    return (
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className={classes.wrapper}>
          <DialogContent>
            <DialogContentText>
              <div className={classes.fab}>
                <Fab
                  aria-label="save"
                  color="primary"
                  className={classes.buttonProgress}
                  size={"large"}
                >
                  <CheckIcon style={{ fontSize: 60 }} />
                </Fab>
              </div>
              <div className={classes.center}>
                You've were paired with{" "}
                <Typography className={classes.title} variant="h6">
                  {name}{" "}
                </Typography>
                he dropped the following comments:{" "}
                <Typography className={classes.title} variant="p">
                  {comment}{" "}
                </Typography>
                {link ? (
                  <Typography className={classes.title} variant="p">
                    and suggested you view this{" "}
                    <a
                      target="_blank"
                      className={classes.removeDecoration}
                      href={"https://" + link}
                    >
                      LINK
                    </a>
                  </Typography>
                ) : (
                  "."
                )}
              </div>
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    )
  }
  //

  return state.pairInfo ? (
    <PairInfo
      name={state.partnerInfo.name}
      comment={state.partnerInfo.comment}
      link={state.partnerInfo.link}
    />
  ) : (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Find Match</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To find out who you've been matched with, please enter your usernname and
          group id. We'll get that info in a minute.
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
          label="Group ID"
          type="text"
          fullWidth
          required
          value={data.groupID}
          onChange={handleUserInput("groupID")}
        />
      </DialogContent>
      <DialogActions>
        {state.loading ? (
          <div style={{ margin: "0 auto" }}>
            <Loading />
          </div>
        ) : (
          <React.Fragment>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={loadData} color="primary">
              Find
            </Button>
          </React.Fragment>
        )}
      </DialogActions>
    </Dialog>
  )
}
