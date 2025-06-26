import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'  // useLoaderData is a React Router hook that allows us to access the data returned by a route’s loader function. It's used inside a component that’s rendered by a route with a loader.

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-2 p-3 text-3xl bg-gray-600 text-white'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}