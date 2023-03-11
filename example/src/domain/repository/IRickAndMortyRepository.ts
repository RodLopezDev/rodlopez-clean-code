// IMPORT PROJECT
import { IRepository } from "../../../../src";
import Character from "../entity/Character";

interface IRickAndMortyRepository extends IRepository {
  getAllCharacters: () => Promise<Character[]>;
  getByNameCharacters: (name: string) => Promise<Character[]>;
}

export default IRickAndMortyRepository;
