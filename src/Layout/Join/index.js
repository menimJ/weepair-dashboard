import React from "react"
import clsx from "clsx"
// material ui imports 
import { makeStyles } from "@material-ui/core/styles"
import NavBar from "../../components/NavBar"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Avatar from "@material-ui/core/Avatar"
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import Button from "@material-ui/core/Button"
import { deepOrange } from "@material-ui/core/colors"

// application imports
import { addUserToGroup } from "../../api/groups"
import { getGroupID } from "../../localStorage/groups"
import { useHistory } from "react-router-dom"
import { HOME } from "../../urls"
import Loading from "../../components/Loading"
import {handleNotification} from "../../utils/general"


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },

  width: {
    minWidth: "100%",
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  centerAvatar: {
    margin: "0 auto",
  },

  center: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
  },
}))

export default function Join() {
  const classes = useStyles()
  let history = useHistory()
  const [value, setValue] = React.useState({
    userName: "",
    comment: "",
    name: "",
    link: "",
    loading: false,
    errorMessage: "",
  })

  const handleUserInput = (name) => (event) =>
    setValue({ ...value, [name]: event.target.value })

  const success = () => {
    setValue({ ...value, loading: false })
    handleNotification("SUCCESSFUL","You've successfully joined the group","success")
    history.push(HOME)
  }

  const failed = (message) =>{
    console.log("failed",message)
    setValue({ ...value, loading: false, errorMessage: message })
    handleNotification("FAILED",message)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue({ ...value, loading: true })
    const groupId = getGroupID("groupId")
    if (groupId) {
      const member = {
        username: value.userName,
        comment: value.comment,
        name: value.name,
        link: value.link
      }
      addUserToGroup(groupId, member,success,failed)
    } else {
      history.push(HOME)
    }
  }

  return (
    <div className={classes.root}>
      <NavBar />
      <section className={classes.center}>
        <Avatar className={clsx(classes.orange, classes.centerAvatar)}>N</Avatar>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <FormControl error className={classes.width}>
              <FormHelperText id="component-error-text">
                {value.errorMessage}
              </FormHelperText>
              <TextField
                id="outlined-full-width-1"
                label="Username"
                placeholder="Exwestafrican"
                helperText="Give yourself a cool name"
                fullWidth
                margin="normal"
                value={value.userName}
                onChange={handleUserInput("userName")}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                required
              />

              <TextField
                id="outlined-multiline-static"
                label="Prefrence"
                multiline
                rows={4}
                placeholder="A breif description of what you'd like"
                variant="outlined"
                margin="normal"
                value={value.comment}
                onChange={handleUserInput("comment")}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />

              <TextField
                id="outlined-full-width-2"
                label="Slack Name"
                placeholder="tumise"
                helperText="What do you get called on slack?"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={value.name}
                onChange={handleUserInput("name")}
                required
              />

               <TextField
                id="outlined-full-width-3"
                label="Product Url"
                placeholder="jumia.com/cool-stuff/99"
                helperText="share a link to what you'd like"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={value.link}
                onChange={handleUserInput("link")}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disableElevation
              >
                {value.loading ? <Loading /> : "JOIN"}
              </Button>
            </FormControl>
          </form>
        </Container>
      </section>
    </div>
  )
}
