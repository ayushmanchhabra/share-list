import { createContext, useState } from "react";

import { UserSchema } from "providers";

export function useUser() {

    const [user, setUser] = useState<UserSchema>({
        isAuthenticated: false,
    });

    const { Provider } = createContext<UserSchema>(user);

    interface UserProviderProps {
        children: JSX.Element
    }

    function UserProvider({ children }: UserProviderProps) {
        return (
            <Provider value={user}>{children}</Provider>
        );
    }

    return {
        user,
        setUser,
        UserProvider,
    };
}