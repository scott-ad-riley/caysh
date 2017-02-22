const fetch = require('node-fetch')

const prefix = "http://swapi.co"
const store = {}

module.exports = async (req, res) => {
  if (req.url === "/favicon.ico") return 'go away chrome'
  if (req.url === "/admin") return displayAdmin()
  const apiUrl = `${prefix}${req.url}`
  if (store[apiUrl]) return getFromStore(apiUrl)
  return fetch(apiUrl)
    .then(raw => raw.json())
    .then(parsed => storeResponse(apiUrl, parsed))
}

const storeResponse = (url, parsed) => {
  store[url] = {
    content: parsed,
    counter: 0
  }
  return parsed
}

const getFromStore = (url) => {
  store[url].counter += 1
  return store[url].content
}

const displayAdmin = () => {
  return Object.keys(store)
      .map(url => ({url, count: store[url].counter}))
      .sort(sortByCount)
      .map(obj => `URL: ${obj.url} count: ${obj.count}`)
      .join("\n")
}

const sortByCount = (a, b) => {
  if (a.count > b.count) return -1
  if (a.count < b.count) return 1
  return 0
}