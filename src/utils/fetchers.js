const API = "http://localhost:3001/sushis/"

const getSushi = () => {
  return fetch(API).then((resp) => resp.json())
}

const updateSushi = (sushi) => {
  return fetch(API, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sushi),
  })
}

export { getSushi, updateSushi }
