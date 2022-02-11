const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export default setLocalStorage

export const getLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key)

  if (storedValue !== null) {
    const value = JSON.parse(storedValue)
    return value
  }
  return false
}
