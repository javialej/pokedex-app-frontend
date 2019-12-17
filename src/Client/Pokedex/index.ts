import Axios from "axios";
import { call, put, select } from "redux-saga/effects";
// import { Config } from "../../Config/constants/env_variables";
import { 
    onPokedexSearchSuccess,
    onPokedexSearchError,
    onPokedexDetailsSuccess,
    onPokedexDetailsError
} from "../../Redux/B_actions/pokedex";
// import { IPokeResult } from "../../Redux/C_states/IPokedex";
import {
    getPokemonNameDetails,
    getPokemonNameSearch
} from "../../Redux/E_selectors/pokedex";

const Config = {
    URL_ENDPOINT_POKEAPI_V2: "https://pokeapi.co/api/v2"
}


const getPokedexDetails = (pokemonName: string = "") => {
    return Axios.get(Config.URL_ENDPOINT_POKEAPI_V2 + "/pokemon/"+pokemonName);
  };
export function* handlePokedexDetailsFetch() {
    try {
        const pokemonName : string = yield select(getPokemonNameDetails);
        const response = yield call(getPokedexDetails, pokemonName);
        
        if (response) {
            let {
                id,
                height,
                weight,
                sprites:{
                    front_default,
                },
                moves,
                types
            } = response;
            
            if(Array.isArray(moves)){
                moves.map((item) => { return item.move.name; })
            }else{
                moves = [];
            }            
            
            if(Array.isArray(types)){
                types.map((item) => { return item.type.name; })
            }else{
                types = [];
            }

            const data = {
                id,
                height,
                weight,
                img: front_default,
                moves,
                types,
            }
    
            yield put(onPokedexDetailsSuccess(data));
        } else {
            yield put(onPokedexDetailsError("ERROR FETCHING. Check Backend server status."));
        }
    } catch (e) {
        yield put(onPokedexDetailsError(e.toString()));
    }
}


const getPokedexSearch = (offset: number, limit: number) => {
  return Axios.get(Config.URL_ENDPOINT_POKEAPI_V2 + "/pokemon", {
    params: {
      offset,
      limit
    }
  });
};
export function* handlePokedexSearchFetch() {
  try {
    const offset = 0;
    const limit = 900;    
    const pokemonName : string = yield select(getPokemonNameSearch);

    const response = yield call(getPokedexSearch, offset, limit);
    const { results } = response;

    if (results && Array.isArray(results)) {
        results.map((item) => { return item.name; });
        
        // REGEX search.        
        const Search : any = [];
        results.forEach((item : string) => { 
            let founded = item.match(`/\w+${pokemonName}\w+/g`);
            if(Array.isArray(founded)){
                if(founded[0]){
                    Search.push(item);
                }
            }
        });

        if(Array.isArray(Search) && Search.length){
            Search.map(async (item : any) => {
                const responseDetail : any = await getPokedexDetails(item);

                if(responseDetail) { 

                    let {
                        id,                        
                        sprites: {
                            front_default,
                        },
                        types
                    } = responseDetail;                      
                    
                    if(Array.isArray(types)){
                        types.map((item) => { return item.type.name; })
                    }else{
                        types = [];
                    }

                    return {
                        id,
                        img: front_default,
                        name: item,
                        types,
                    };
                }

                return {};                
            })
        }
        
        yield put(onPokedexSearchSuccess(Search));
    } else {
      yield put(onPokedexSearchError("ERROR FETCHING. Check Backend server status."));
    }
  } catch (e) {
    yield put(onPokedexSearchError(e.toString()));
  }
}