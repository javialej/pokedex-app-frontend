export interface IPokeResult {
    id: number;
    img: string;
    name: string;
    types: Array<string>;
}

export interface IPokedexState {
    listOfResults: Array<IPokeResult>;
    pokemonNameDetails: string;
    pokemonNameSearch: string;
    getPokemonDetails: any;    
    getPokemonSearch: any;    
  }
  
  export const defaultPokedexState: IPokedexState = {
    listOfResults: [],
    pokemonNameDetails: "",
    pokemonNameSearch: "",
    getPokemonDetails: {},
    getPokemonSearch: {}
  };
  