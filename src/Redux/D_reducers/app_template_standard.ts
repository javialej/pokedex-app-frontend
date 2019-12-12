import { handleActions } from "redux-actions";
import { } from "../A_constants/app_template_standard";
import {
  defaultAppTemplateStandardState,
  IAppTemplateStandardState,
} from "../C_states/IAppTemplateStandardState";

export const app_template_standard = handleActions<IAppTemplateStandardState>(
  {
    
  },
  defaultAppTemplateStandardState
);
