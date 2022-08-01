import React from "react";
import { POKEMON_IMAGE_API } from "../config";

const Card = ({ pokemon, index }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-black rounded-md">
      <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
      <img
        src={`${POKEMON_IMAGE_API}${index + 1}.png`}
        alt="pokemon"
        className=""
      />
    </div>
  );
};

export default Card;
