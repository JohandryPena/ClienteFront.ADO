
const storage = {
  setItem: (key: string, item: unknown | string, json = false) => {
    try {
      if (json) return sessionStorage.setItem(key, JSON.stringify(item))
      sessionStorage.setItem(key, item as string);
    } catch (error) {
      if (error instanceof TypeError)
        console.log("TypeError occurred:", error.message);
    }
  },
  getItem: (key: string, json = false) => {
    try {
      if (json) return JSON.parse(sessionStorage.getItem(key) as string);
      return sessionStorage.getItem(key);
    } catch (error) {
      if (error instanceof TypeError)
        console.log("TypeError occurred:", error.message);
    }
  },
  removeItem: (key: string) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      if (error instanceof TypeError)
        console.log("TypeError occurred:", error.message);
    }
  },
  clearStorage: () => {
    try {
      sessionStorage.clear();
    } catch (error) {
      if (error instanceof TypeError)
        console.log("TypeError occurred:", error.message);
    }
  }
}

export default storage;
