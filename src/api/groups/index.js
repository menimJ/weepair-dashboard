import axios from "axios"

const baseUrl = "https://weepair.herokuapp.com/api/"

export function addUserToGroup(groupID, member, success, failed) {
  return axios
    .post(baseUrl + "members" + "/" + groupID + "/", member)
    .then((res) => success())
    .catch((err) => failed(err.response.data.message))
}

export function viewMatch(details, success, failed) {
  return axios
    .post(baseUrl + "members/partner/", details)
    .then((res) => {
      const { comment, link, name } = res.data.partner
      success(name, comment, link)
    })
    .catch((err) => failed(err.response.data.message))
}

export function createGroup(details, success, failed) {
  return axios
    .post(baseUrl + "groups", details)
    .then((res) => {
      const groupID = res.data.data.group.groupID
      success(groupID)
    })
    .catch((err) => failed(err.response.data.message))
}

export function verifyGroupID(groupID) {
  return axios
    .get(baseUrl + "groups/" + groupID)
    .then((res) => res.data.success)
    .catch((err) => err.response.data.success)
}

// verify group id
