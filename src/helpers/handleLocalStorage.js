export const addToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.log('Przepraszamy');
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data;
  } catch (e) {
    console.log('Przepraszamy');
  }
};
