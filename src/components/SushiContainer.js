import React, { useState, useEffect } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"
import { getSushi } from "../utils/fetchers"

const initialSushi = {
  start: 0,
  end: 4,
}

function SushiContainer({ updatePlates, moneySpent, updateMoneySpent }) {
  const [sushiList, setSushi] = useState(null)
  const [pages, setPages] = useState(initialSushi)

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
    updatePlates(id)
  }

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
        updateSushi={updateSushi}
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
