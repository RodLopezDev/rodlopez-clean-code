import Character from "../../domain/entity/Character";
import IRickAndMortyRepository from "../../domain/repository/IRickAndMortyRepository";

const useRickAndMortyRepository = (): IRickAndMortyRepository => {
  const getAllCharacters = async () => {
    const result = await fetch("https://rickandmortyapi.com/api/character");
    const json = await result.json();
    return json?.results as Character[];
  };
  const getByNameCharacters = async (name: string) => {
    const result = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const json = await result.json();
    return json?.results as Character[];
  };
  return { getAllCharacters, getByNameCharacters };
};

export default useRickAndMortyRepository;
