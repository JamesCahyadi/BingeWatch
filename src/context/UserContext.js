import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };
  console.log(value);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default useUser;
