
import { localStorageDict } from "./localStorage";
const {
  RemoveFromStorage,
  getItemFromLocalStorage,
  storeInStorage,
  ItemInStorage,
} = localStorageDict;
const userToken = "userToken";

class User {
  login(email, password, sucess, failed) {}

  logout(cb) {}

  getDetails(attribute) {}

  get isAuthenticated() {
    return this.authenticated();
  }

  authenticated() {
    //   check if user has token in local storage
    // if yes, send a post request to verify if token is valid
    // else user is not authennticated
   
}


