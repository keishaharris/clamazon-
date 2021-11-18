import React, {createContext, useContext,  useReducer} from "react";

//prepares dataLayer
export const StateContext = createContext();

//wraps our app and provides data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pullinfo from the data layer
export const useStateValue = () => useContext(StateContext);