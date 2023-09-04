import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string) {
    const value: T = JSON.parse(window.localStorage.getItem(key) as any);
    const [item, setItem] = useState<T>(value);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(item));
    }, [item]);

    return { item, setItem };
}
