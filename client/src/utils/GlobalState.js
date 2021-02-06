import React, { createContext, useContext, useReducer } from "react";
const LOGIN = "LOGIN";

// instantiate the global state object
const StoreContext = createContext();

const initialState = { user: null };

const useStoreContext = () => {
  return useContext(StoreContext);
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return {
        ...state,
        user: action.payload,
      };
     
    default:
      break;
  }
}

function Store(props) {
  const [globalStore, dispatch] = useReducer(reducer, initialState);
  return (
   <StoreContext.Provider value={{globalStore, dispatch}}>
     {props.children}
   </StoreContext.Provider> 
  )
}

export { Store, useStoreContext };
