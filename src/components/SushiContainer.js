import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

const initialSushi = {
  start: 0,
  end: 4,
}

function SushiContainer({
  sushiList,
  updatePlates,
  moneySpent,
  updateMoneySpent,
}) {
  const [pages, setPages] = useState(initialSushi)

  const currentBeltOfSushi = sushiList.slice(pages.start, pages.end)

  const nextBeltOfSushi = () => {
    if (pages.start < 96) {
      setPages({
        start: pages.start + 4,
        end: pages.end + 4,
      })
    } else {
      setPages(initialSushi)
    }
  }

  const sushiBelt = currentBeltOfSushi.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        updatePlates={updatePlates}
        moneySpent={moneySpent}
        updateMoneySpent={updateMoneySpent}
      />
    )
  })

  return (
    <div className="belt">
      {sushiBelt}
      <MoreButton nextBeltOfSushi={nextBeltOfSushi} />
    </div>
  )
}

export default SushiContainer
