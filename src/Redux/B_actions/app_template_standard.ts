import { createAction } from "redux-actions";
import { TEMPLATE_STANDARD } from "../A_constants/app_template_standard";

export const setData = createAction(
  TEMPLATE_STANDARD,
  (payload: any) => payload
);
