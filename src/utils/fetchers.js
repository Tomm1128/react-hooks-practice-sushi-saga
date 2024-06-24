const API = "http://localhost:3001/sushis/"

const getSushi = () => {
  return fetch(API).then((resp) => resp.json())
}

export { getSushi }
