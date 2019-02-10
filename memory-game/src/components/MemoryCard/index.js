import React from "react";
import "./index.css";

function MemoryCard (props) {
  return (
      <div className = "col-sm-4">
        <div className="card" data-id={props.id}>
          <div className="card-body img-container">
            <img alt={props.name} src={props.image} />
            </div>
          </div>
        </div>
  )
}

export default MemoryCard;
