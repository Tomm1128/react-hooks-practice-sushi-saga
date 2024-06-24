import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

function App() {
  const [emptyPlates, setEmptyPlates] = useState([])
  const [moneySpent, setMoneySpent] = useState(0)

  const updatePlates = (id) => {
    if (!emptyPlates) {
      setEmptyPlates([id])
    } else if (!emptyPlates.includes(id)) {
      setEmptyPlates([...emptyPlates, id])
    }
  }

  const updateMoneySpent = (price) => {
    setMoneySpent(moneySpent + price)
  }

  return (
    <div className="app">
      <SushiContainer
        updatePlates={updatePlates}
        moneySpent={moneySpent}
        updateMoneySpent={updateMoneySpent}
      />
      <Table plates={emptyPlates} moneySpent={moneySpent} />
    </div>
  )
}

export default App
