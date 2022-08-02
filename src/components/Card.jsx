import React from "react";
import { POKEMON_IMAGE_API } from "../config";

const Card = ({ pokemon, index }) => {
  return (
    <div className="flex flex-col justify-center items-center border border-black rounded-md">
      <div className="w-full flex justify-between p-4">
        <p>#{index + 1}</p>
        <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
      </div>
      <img
        src={`${POKEMON_IMAGE_API}${index + 1}.png`}
        alt="pokemon"
        className=""
      />
    </div>
  );
};

export default Card;
