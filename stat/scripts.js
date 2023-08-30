import { initialState, createStore } from "./hid/state.js";
import { reducer } from "./hid/red.js";
import { add, subtract, reset } from "./hid/action.js";

const store = createStore(initialState, reducer);

console.log("Scenario 1: Initial state");
console.log(store.getState()); // should log count: 0 ?

console.log("Scenario 2: Increment the counter by one");
store.dispatch(add);
store.dispatch(add);
console.log(store.getState()); // should log count: 2 ?

console.log("Scenario 3: Decrement the counter by one");
store.dispatch(subtract);
console.log(store.getState()); // should log count: 1 ?

console.log("Scenario 4: Resetting the Tally Counter");
store.dispatch(reset);
console.log(store.getState()); // should log count: 0 ?

  