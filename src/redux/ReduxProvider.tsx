'use client'
import { store } from "@/redux/store"
import { ReactNode } from "react"
import { Provider as ReactReduxProvider } from "react-redux"

export default function ReduxProvider ({children} : {children:ReactNode}) {
    return (
        <ReactReduxProvider store={store}>
            {children}
        </ReactReduxProvider>
    )
}
