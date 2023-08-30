const initialState = {
    count: 0,
  };
  
  function createStore(initialState, reducer) {
    let state = initialState;
    const listeners = [];
  
    function getState() {
      return state;
    }
  
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    }
  
    function subscribe(listener) {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }
  
  export { initialState, createStore };