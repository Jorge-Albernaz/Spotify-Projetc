import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items }) => {
  console.log(items);

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <a className="item-list__link" href="/">
          Mostrar Tudo
        </a>
      </div>

      <div className="item-list__container">
        {Array(items)
          .fill()
          .map((currentvalue, index) => (
            <SingleItem key={`${title}-${index}`} />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
