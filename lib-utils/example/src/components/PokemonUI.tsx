import { FC } from "react";
import { Pokemon } from "../Pokemon";
import BaseBox from "./BaseBox";

interface Props {
  strategy: string;
  pokemon: Pokemon;
}

const PokemonUI: FC<Props> = ({ pokemon, strategy }) => {
  const { sprites } = pokemon;
  return (
    <BaseBox>
      <div>
        <div>{strategy}</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <img
              src={sprites?.other?.["official-artwork"]?.front_default}
              style={{ width: "100px" }}
            />
          </div>
          <div>
            <img
              src={sprites?.other?.dream_world?.front_default}
              style={{ width: "80px" }}
            />
          </div>
          <div>
            <img
              src={sprites?.other?.home?.front_default}
              style={{ width: "80px" }}
            />
          </div>
          <div>
            <img src={sprites?.front_default} />
          </div>
          <div>
            <img src={sprites?.back_default} />
          </div>
          <div>
            <img src={sprites?.front_shiny} />
          </div>
          <div>
            <img src={sprites?.back_shiny} />
          </div>
        </div>
      </div>
    </BaseBox>
  );
};

export default PokemonUI;
