import { createAction } from "redux-actions";
import { 
    GET_POKEDEX_DETAILS_FETCHING,
    GET_POKEDEX_DETAILS_SUCCESS,
    GET_POKEDEX_DETAILS_ERROR,

    GET_POKEDEX_SEARCH_FETCHING,
    GET_POKEDEX_SEARCH_SUCCESS,
    GET_POKEDEX_SEARCH_ERROR
} from "../A_constants/pokedex";

export const onPokedexDetailsFetch = createAction(GET_POKEDEX_DETAILS_FETCHING);
export const onPokedexDetailsSuccess = createAction(GET_POKEDEX_DETAILS_SUCCESS);
export const onPokedexDetailsError = createAction(GET_POKEDEX_DETAILS_ERROR);

export const onPokedexSearchFetch = createAction(GET_POKEDEX_SEARCH_FETCHING);
export const onPokedexSearchSuccess = createAction(GET_POKEDEX_SEARCH_SUCCESS);
export const onPokedexSearchError = createAction(GET_POKEDEX_SEARCH_ERROR);
