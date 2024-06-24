import React, { useState } from "react"

function WalletModal({ updateSushiWallet }) {
  const [newAmount, setNewAmount] = useState(0)

  const handleInput = () => {
    updateSushiWallet(Number(newAmount))
  }

  return (
    <div className="wallet-form">
      <h2>Add to Wallet</h2>
      <input
        type="text"
        value={newAmount}
        onChange={(event) => setNewAmount(event.target.value)}
      ></input>
      <button onClick={handleInput}>Submit</button>
    </div>
  )
}

export default WalletModal
