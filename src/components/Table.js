import React, { useState } from "react"
import WalletForm from "./WalletForm"

function Table({ plates = [], sushiWallet, updateSushiWallet, moneySpent }) {
  const [isShowing, setShowing] = useState(false)

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ))

  const showForm = () => {
    setShowing(!isShowing)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${sushiWallet - moneySpent} remaining!
      </h1>
      <button className="wallet-button" onClick={showForm}>
        {isShowing ? "Close Form" : "Add to Wallet"}
      </button>
      {isShowing ? <WalletForm updateSushiWallet={updateSushiWallet} /> : null}
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
