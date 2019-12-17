import { createAction } from "redux-actions";
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

export const onPokedexDetailsFetch = createAction(GET_POKEDEX_DETAILS_FETCHING);
export const onPokedexDetailsSuccess = createAction(GET_POKEDEX_DETAILS_SUCCESS);
export const onPokedexDetailsError = createAction(GET_POKEDEX_DETAILS_ERROR);

export const setPokemonNameDetails = createAction(SET_POKEMON_NAME_DETAILS, (payload : any) => payload );

export const onPokedexSearchFetch = createAction(GET_POKEDEX_SEARCH_FETCHING);
export const onPokedexSearchSuccess = createAction(GET_POKEDEX_SEARCH_SUCCESS);
export const onPokedexSearchError = createAction(GET_POKEDEX_SEARCH_ERROR);

export const setPokemonNameSearch = createAction(SET_POKEMON_NAME_SEARCH, (payload : any) => payload );

export const cleanPokedexResult = createAction(CLEAN_POKEDEX_RESULT);
export const setPokedexResult = createAction(SET_POKEDEX_RESULT);