import { combineReducers } from "redux";

import { app } from "./app";
import { pokedex } from "./pokedex";
import { APP_RESET_STATE } from "../A_constants/app";

export const app_reducer = combineReducers({
  app,
  pokedex
});

export const reducer = (state: any, action: any) => {
  if (action.type === APP_RESET_STATE) {
    state = undefined;
  }

  return app_reducer(state, action)
}

export type AppState = ReturnType<typeof reducer>;
