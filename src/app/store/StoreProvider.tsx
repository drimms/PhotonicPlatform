import { ReactNode, createContext, useContext } from "react";
import Store from "./store";

export const rootStore = new Store();

export const StoreContext = createContext<Store>(rootStore);

export function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <StoreContext.Provider value={rootStore}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore(){
    return useContext<Store>(StoreContext);
}