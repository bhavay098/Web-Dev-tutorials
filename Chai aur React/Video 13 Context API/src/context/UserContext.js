//  Step-1 Creating the context

import React from 'react'

const UserContext = React.createContext()  // This creates a context object

export default UserContext;  // This UserContext is the actual context you'll use to share and access user data globally.
// UserContext is the Context Object created using createContext()