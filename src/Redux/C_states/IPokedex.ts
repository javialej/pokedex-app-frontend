export interface IPokeResult {
    img: string;
    name: string;
    types: Array<string>;
}

export interface IPokedexState {
    listOfResults: Array<IPokeResult>;
    getPokemonDetails: any;
    getPokemonSearch: any;
  }
  
  export const defaultPokedexState: IPokedexState = {
    listOfResults: [],
    getPokemonDetails: {},
    getPokemonSearch: {}
  };
  