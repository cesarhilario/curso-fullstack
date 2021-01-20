const localStorage = window.localStorage;

const storage = {
  setStorageValue(key, value) {
    localStorage.setItem(key, value);
  },
  getStorageValue(key) {
    return localStorage.getItem(key)
  },
  removeStorageValue(key) {
    localStorage.removeItem(key)
  },
  clearStorage() {
    localStorage.clear();
  }  
}

export default storage;

