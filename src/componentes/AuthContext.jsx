// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext({
//     isLoggedIn : false,
//     setLoggedIn : () => {},
// });

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
