import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/* Item List de Artistas Populares*/}
      <ItemList title="Artistas" items={5} />
      {/* Item List de Musicas Populares */}
      <ItemList title="Músicas" items={10} />
    </div>
  );
};

export default Main;
