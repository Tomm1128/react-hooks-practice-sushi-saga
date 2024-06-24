import React, { useState, useRef } from "react"

function Sushi({ sushi: { id, name, img_url, price, isEaten }, updatePlates }) {
  const [isEatenState, setEaten] = useState(isEaten)

  const onPlateClick = (event) => {
    if (isEatenState === false) {
      setEaten(true)
    }
    updatePlates(event.target.id)
  }

  return (
    <div className="sushi">
      <div className="plate" id={id} onClick={onPlateClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEatenState ? null : (
          <img id={id} src={img_url} alt={name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
