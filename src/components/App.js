import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

function App() {
  const [emptyPlates, setEmptyPlates] = useState([])
  const [moneySpent, setMoneySpent] = useState(0)
  const [sushiWallet, setSushiWallet] = useState(100)

  const updatePlates = (id) => {
    if (!emptyPlates) {
      setEmptyPlates([id])
    } else if (!emptyPlates.includes(id)) {
      setEmptyPlates([...emptyPlates, id])
    }
  }

  const updateSushiWallet = (amount) => {
    setSushiWallet(sushiWallet + amount)
  }

  const updateMoneySpent = (price) => {
    setMoneySpent(moneySpent + price)
  }

  return (
    <div className="app">
      <SushiContainer
        updatePlates={updatePlates}
        sushiWallet={sushiWallet}
        moneySpent={moneySpent}
        updateMoneySpent={updateMoneySpent}
      />
      <Table
        plates={emptyPlates}
        sushiWallet={sushiWallet}
        updateSushiWallet={updateSushiWallet}
        moneySpent={moneySpent}
      />
    </div>
  )
}

export default App
