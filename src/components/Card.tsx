import React from "react";
import CardProps from "./models/CardInterfaces";

const Card: React.FC<CardProps> = ({
  id,
  title,
  completed,
  expiredDateTime,
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>ID: {id}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
      <p>Expired Date: {expiredDateTime}</p>
    </div>
  );
};

export default Card;
