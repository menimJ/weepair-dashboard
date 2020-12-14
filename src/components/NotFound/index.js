import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import NavBar from "../NavBar"
import { makeSentence } from "../../utils/general"
import { useHistory } from "react-router-dom"
import { HOME } from "../../urls"

const useStyles = makeStyles((theme) => ({
  centerPage: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      marginBottom: theme.spacing(3),
    },
  },
  textDesign: {
    fontSize: "2.25rem",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "2.75rem",
    color: "#3c4043",
    maxWidth: "700px",
    textAlign: "center",
  },
}))

export default function NotFound(props) {
  const classes = useStyles()
  const message = props.match.params.message
  const history = useHistory()

  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.centerPage}>
        <Typography className={classes.textDesign} variant="h3">
          {message ? makeSentence(message) : "INVALID URL"}
        </Typography>
        <div>
          <Button  onClick={()=>history.push(HOME)} variant="contained" color="primary" disableElevation>
            RETURN HOME
          </Button>
        </div>
      </div>
    </React.Fragment>
  )
}
