import React, { useState, useEffect } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"
import { getSushi } from "../utils/fetchers"

function SushiContainer(props) {
  const [sushiList, setSushi] = useState([])

  useEffect(() => {
    getSushi().then((sushiResp) => setSushi(sushiResp))
  }, [])

  const sushiBelt = sushiList.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} />
  })

  return (
    <div className="belt">
      {sushiBelt}
      <MoreButton />
    </div>
  )
}

export default SushiContainer
