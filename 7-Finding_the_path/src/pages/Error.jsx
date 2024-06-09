import React from 'react'
import { useRouteError } from 'react-router'

export const Error = () => {

    const err = useRouteError();

    return (
        <>
        <h1>oops!! something went wrong</h1>
        <p>{err.statusText}</p>
        </>
    )
}