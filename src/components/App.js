import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"
import { getSushi } from "../utils/fetchers"

function App() {
  const [sushiList, setSushi] = useState(null)
  const [moneySpent, setMoneySpent] = useState(0)
  const [sushiWallet, setSushiWallet] = useState(100)

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

  const updateSushiWallet = (amount) => {
    setSushiWallet(sushiWallet + amount)
  }

  const updateMoneySpent = (price) => {
    setMoneySpent(moneySpent + price)
  }

  const emptyPlates = sushiList.filter((sushi) => sushi.isEaten === true)

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        updateSushi={updateSushi}
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
