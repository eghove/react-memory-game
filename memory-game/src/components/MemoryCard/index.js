import React from "react";

function MemoryCard (props) {
  return (
    <div className = "card" data-id = {props.id}>
      <div className = "img-container">
        <img alt = {props.name} src = {props.image} />
      </div>
    </div>
  )
}

export default MemoryCard;
