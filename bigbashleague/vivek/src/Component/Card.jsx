import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="viv">
      <img src="https://imgs.search.brave.com/6LDhRZMN2_cwg8rO0Mja9BcQLuLh0OtebJTZWrKxFXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxNTk4/OTIuanBn" alt=""  width={290}/>
      <h1>{props.name}</h1>
      <h2>{props.edu}</h2>
    </div>
  )
}

export default Card;
