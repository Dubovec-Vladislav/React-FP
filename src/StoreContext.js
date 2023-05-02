import React from "react";

const StoreContext = React.createContext(null);

export function Provider(props) {
    return <StoreContext.Provider value={props.store} >
        {props.children}
    </StoreContext.Provider>
};

export default StoreContext;