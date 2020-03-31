import { init } from "@rematch/core";
import * as models from "../model/index";

const store = init({
  models
});

export default store;