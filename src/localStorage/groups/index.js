

export function storeGroupID(key, value){
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
  };

export function getGroupID(key){
  const value = localStorage.getItem(key);
  if (value) return JSON.parse(value);
  return false;
}