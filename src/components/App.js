import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import { getSushi } from "../utils/fetchers"

function App() {
  const [sushiList, setSushi] = useState(null)
  const [emptyPlates, setEmptyPlates] = useState([])
  const [moneySpent, setMoneySpent] = useState(0)

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

  const updateSushi = (id) => {
    const updatedSushi = sushiList.map((sushi) => {
      if (sushi.id === Number(id)) {
        return {
          ...sushi,
          isEaten: true,
        }
      } else return sushi
    })
    setSushi(updatedSushi)
  }

  const updatePlates = (id) => {
    if (!emptyPlates) {
      setEmptyPlates([id])
    } else if (!emptyPlates.includes(id)) {
      setEmptyPlates([...emptyPlates, id])
    }
    updateSushi(id)
  }

  const updateMoneySpent = (price) => {
    setMoneySpent(moneySpent + price)
  }

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        updatePlates={updatePlates}
        moneySpent={moneySpent}
        updateMoneySpent={updateMoneySpent}
      />
      <Table plates={emptyPlates} moneySpent={moneySpent} />
    </div>
  )
}

export default App
