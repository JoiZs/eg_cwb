import React, { createContext, useState } from 'react'

export const DarkCont = createContext<any>(0)

export default function ContextDark({ children }: { children: any }) {
    const [darkMode, setDarkMode] = useState<any>(0)
    return (
        <DarkCont.Provider value={[darkMode, setDarkMode]}>
            {children}
        </DarkCont.Provider>
    )
}
