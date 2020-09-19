export const authTokenName = "authToken";

export const localStorageDict = {
  storeInStorage(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  },
  ItemInStorage(key) {
    if (localStorage.getItem(key)) return true;
    else return false;
  },
  RemoveFromStorage(key) {
    localStorage.removeItem(key);
  },
  getItemFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return false;
  },
};
