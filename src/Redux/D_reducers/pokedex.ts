import { handleActions } from "redux-actions";
import { 
    GET_POKEDEX_DETAILS_FETCHING,
    GET_POKEDEX_DETAILS_SUCCESS,
    GET_POKEDEX_DETAILS_ERROR,

    SET_POKEMON_NAME_DETAILS,

    GET_POKEDEX_SEARCH_FETCHING,
    GET_POKEDEX_SEARCH_SUCCESS,
    GET_POKEDEX_SEARCH_ERROR,

    SET_POKEMON_NAME_SEARCH,

    CLEAN_POKEDEX_RESULT,
    SET_POKEDEX_RESULT
} from "../A_constants/pokedex";
import { defaultPokedexState, IPokedexState } from "../C_states/IPokedex";

export const pokedex = handleActions<IPokedexState>(
  {
    [SET_POKEMON_NAME_DETAILS]: (
      state: IPokedexState,
      action: any
    ) => {      
      return {
        ...state,
        pokemonNameDetails: action.payload
      };
    },
    [SET_POKEMON_NAME_SEARCH]: (
      state: IPokedexState,
      action: any
    ) => {      
      return {
        ...state,
        pokemonNameSearch: action.payload
      };
    },
    [CLEAN_POKEDEX_RESULT]: (
      state: IPokedexState,
      action: any
    ) => {      
      return {
        ...state,
        listOfResults: []
      };
    },
    [SET_POKEDEX_RESULT]: (
      state: IPokedexState,
      action: any
    ) => {      
      return {
        ...state,
        listOfResults: [
          ...state.listOfResults, 
          action.payload
        ]
      };
    },
    [GET_POKEDEX_DETAILS_FETCHING]: (
      state: IPokedexState,
      action: any
    ) => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonDetails,
          loading: true
        }
      };
    },
    [GET_POKEDEX_DETAILS_SUCCESS]: (
      state: IPokedexState,
      action: any
    ): IPokedexState => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonDetails,
          loading: false,
          data: [...action.payload]
        }
      };
    },
    [GET_POKEDEX_DETAILS_ERROR]: (
      state: IPokedexState,
      action: any
    ): IPokedexState => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonDetails,
          loading: false,
          error: [...action.payload]
        }
      };
    },
    [GET_POKEDEX_SEARCH_FETCHING]: (
      state: IPokedexState,
      action: any
    ) => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonSearch,
          loading: true
        }
      };
    },
    [GET_POKEDEX_SEARCH_SUCCESS]: (
      state: IPokedexState,
      action: any
    ): IPokedexState => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonSearch,
          loading: false,
          data: [...action.payload]
        }
      };
    },
    [GET_POKEDEX_SEARCH_ERROR]: (
      state: IPokedexState,
      action: any
    ): IPokedexState => {
      return {
        ...state,
        getPokemonDetails: {
          ...state.getPokemonSearch,
          loading: false,
          error: [...action.payload]
        }
      };
    }
  },
  defaultPokedexState
);
