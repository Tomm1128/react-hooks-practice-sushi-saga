import React from "react"

function Table({ plates = [], moneySpent }) {
  const money = 100

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ))

  return (
    <>
      <h1 className="remaining">You have: ${money - moneySpent} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  )
}

export default Table
