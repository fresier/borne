"use client"

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export const ReactQueryDevtoolsProvider = () => {
    return (
            <ReactQueryDevtools initialIsOpen={false} />
    )
}
