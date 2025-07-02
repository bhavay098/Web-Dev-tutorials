// Step-2 Providing the context

import React from "react";
import UserContext from "./UserContext";

// This defines a provider component that wraps other components.
const UserContextProvider = ({ children }) => {   // children is a special prop that represents whatever is inside this component
    const [user, setUser] = React.useState(null)   // This creates a piece of state inside the provider:

    return (
        // wrapping the children with UserContext.Provider.
        <UserContext.Provider value={{user, setUser}}>   {/* The 'value' prop is the data you want to share across the component tree. This means any component inside UserContextProvider can read or update the user from anywhere in the app. */}
            {children}   {/* rendering the children passed to this provider, so they get access to the context. */}
        </UserContext.Provider>   // .Provider component is used to wrap part of our app and "provide" a value to it
    )   // UserContextProvider is a wrapper component that provides the value (like { user, setUser }) to its children using the UserContext.Provider.
}

export default UserContextProvider