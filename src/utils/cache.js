const readFromCache = url => JSON.parse(localStorage.getItem(url)) || null;

const writeToCache = (url, data) =>
  localStorage.setItem(url, JSON.stringify(data));

export { readFromCache, writeToCache };
