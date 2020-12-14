import { store } from "react-notifications-component"
import { JOIN } from "../../urls"

export const handleNotification = (title, message, type = "danger") => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  })
}

export function copyToClipboard(inputRefrence) {
  console.log("gg")
  inputRefrence.current.select()
  inputRefrence.current.setSelectionRange(0, 99999)
  document.execCommand("copy")
  console.log(document.execCommand("copy"))
}

export function generateGroupLink(groupId) {
  return window.location.origin.toString() + JOIN + "/" + groupId
}

export function generateGroupId(groupLink) {
  const joinUrl = window.location.origin.toString() + JOIN + "/"
  const data = groupLink.split(joinUrl)
  const groupId = data.length === 2 ? data[1] : groupLink
  return groupId
}

export function makeSentence(text){
  return text.split("_").join(" ")
}
