import { createContext, useState } from "react";

export const AuthContext = createContext();

// AuthProvide why this is needed because hm authcontext.provider ko wrap ess ka under wrap kr sake taki jo bhi component is AuthProvider ke under hoga wo is context ka access kr sake aur use kar sake. Aur isme hm user aur setUser ko state me rakh rahe hai taki jab bhi user login ya logout kare to hm user ki state ko update kr sake aur isse hamare app me user ki information available ho jaye.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

//The Context API in React is a way to share data between components without passing props manually through every level of the component tree.

//It helps solve the problem of prop drilling, where data has to be passed through many intermediate components that don't actually use it.
