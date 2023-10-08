import React, { useEffect, useState } from "react";
import axios from "../apiConfig"; // Import Axios configuration
import Card from "./Card";
import CardProps from "./models/CardInterfaces";

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    // Make an API request to fetch data
    axios
      .get("/Todos/expired-ascending?pageNumber=2&pageSize=2")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          completed={card.completed}
          expiredDateTime={card.expiredDateTime}
        />
      ))}
    </div>
  );
};

export default CardList;
