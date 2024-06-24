import React from "react"

function Table({ plates = [], sushiWallet, updateSushiWallet, moneySpent }) {
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ))

  return (
    <>
      <h1 className="remaining">
        You have: ${sushiWallet - moneySpent} remaining!
      </h1>
      <button className="wallet-button">Add More to Wallet</button>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
