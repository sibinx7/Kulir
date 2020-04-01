import { init } from "@rematch/core";
import models from "../model/index";

const store = init({
  models
});

export default store;