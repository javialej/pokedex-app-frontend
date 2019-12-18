export interface IPokeResult {
    id: number;
    img: string;
    name: string;
    types: Array<string>;
}

export interface IPokedexState {
    offset: number;
    limit: number;
    listOfResults: Array<IPokeResult>;
    pokemonNameDetails: string;
    pokemonNameSearch: string;
    getPokemonDetails: any;    
    getPokemonSearch: any;    
  }
  
  export const defaultPokedexState: IPokedexState = {
    offset: 0,
    limit: 50,
    listOfResults: [],
    pokemonNameDetails: "",
    pokemonNameSearch: "",
    getPokemonDetails: {},
    getPokemonSearch: {}
  };
  