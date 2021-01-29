import React, { createContext, useContext } from "react";

// instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

// VVV From Shop-Shop
// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     categories: [],
//     currentCategory: ''
//   });
//   console.log(state);
//   return <Provider value={[state, dispatch]} {... props} />;
// };

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };