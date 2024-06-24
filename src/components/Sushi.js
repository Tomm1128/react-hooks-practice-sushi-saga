import React from "react"

function Sushi({
  sushi: { id, name, img_url, price, isEaten },
  updateSushi,
  sushiWallet,
  moneySpent,
  updateMoneySpent,
}) {
  const onPlateClick = (event) => {
    if (isEaten === false && moneySpent + price < sushiWallet) {
      updateSushi(event.target.id)
      updateMoneySpent(price)
    } else if (moneySpent + price > sushiWallet) {
      alert("You do not have enough money fo that sushi!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" id={id} onClick={onPlateClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : <img id={id} src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
