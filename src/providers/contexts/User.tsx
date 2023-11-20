import { createContext, useState } from "react";

import { UserSchema } from "providers";

interface UserProviderProps {
  children: JSX.Element;
}

export function useUser() {
  const [user, setUser] = useState<UserSchema>({} as UserSchema);
  const { Provider } = createContext(user);

  function UserProvider({ children }: UserProviderProps) {
    return <Provider value={user}>{children}</Provider>;
  }

  function isAuthenticated() {
    return user?.authenticated;
  }

  return {
    user,
    setUser,
    UserProvider,
    isAuthenticated,
  };
}