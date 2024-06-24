import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import { getSushi } from "../utils/fetchers"

function App() {
  const [sushiList, setSushi] = useState(null)
  const [emptyPlates, setEmptyPlates] = useState(null)

  useEffect(() => {
    getSushi().then((sushiResp) => {
      const updatedSushi = sushiResp.map((sushi) => {
        return {
          ...sushi,
          isEaten: false,
        }
      })
      setSushi(updatedSushi)
    })
  }, [])

  if (!sushiList) {
    return <h2>Loading...</h2>
  }

  const updatePlates = (plate) => {
    if (!emptyPlates) {
      setEmptyPlates([plate])
    } else if (!emptyPlates.includes(plate)) {
      setEmptyPlates([...emptyPlates, plate])
    }
  }

  console.log(emptyPlates)

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} updatePlates={updatePlates} />
      <Table />
    </div>
  )
}

export default App
