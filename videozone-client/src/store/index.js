import { init } from "@rematch/core";
import models from "../model/index";

/**
 * @summary Combined store 
 * @description Single store 
 */
const store = init({
  models
});

export default store;