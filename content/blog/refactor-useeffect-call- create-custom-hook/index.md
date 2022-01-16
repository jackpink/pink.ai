---
title: Refactor useEffect Call`:` Create Custom Hook
date: "2022-01-15T15:00:00.121Z"
description: "Refactor our previous useEffect hook to be a custom hook that can be moved from our compoenent and also reused for other API endpoints"
---

Currently we have a seperate function for making our API call with axious and some error handling, shown below.

```js
export const getAlbums = async () => {
  try {
    const response = await axios.get(albumsURL)
    if (response.ok) {
      return response.data.albums
    }
  } catch (err) {
    console.log("get albums error", err)
    return []
  }
}
```

Then in our component we have our useEffect Hook which also contains a function `getAlbumsFromBackend` which is created everytime the hook runs (this was because we couldn't use async await directly in the useEffect hook). There is also some further error handling in here.

```js
useEffect(() => {
  const getAlbumsFromBackend = async () => {
    const albumsFromBackend = await getAlbums()
    console.log("Response from backend ", albumsFromBackend)
    setAlbums(albumsFromBackend)
  }

  try {
    getAlbumsFromBackend()
    setCreateResult(false) // return createResult value to false
  } catch {
    console.log("didn't get from backend")
  }
}, [createResult])
```

An issue with this is that it complicates our component and puts it in violation of the single respoinsibility princple. The component is resonsibile for presenting a UI display and for perfoming our API request plus error handling.

Another issue is that if we want to perform a simlar API call elsewhere, but to a different endpoint, we would need to rewrite much of the same code.

Luckily in React we can start to fix this by creating a custom hook. We can move the entire useEffect code out of this component and put it within a custom hook. All we are required to do is wrap it in a function that has a name beginning with "use".

We also need to move our React state values that are used by useEffect into this custom hook

```js
export const useBackend = () => {
  const [albums, setAlbums] = useState([])
  const [createResult, setCreateResult] = useState(false)

  useEffect(() => {
    const getAlbumsFromBackend = async () => {
      console.log("Call to backend on page load")
      const albumsFromBackend = await getAlbums()
      console.log("Response from backend ", albumsFromBackend)
      setAlbums(albumsFromBackend)
    }

    try {
      getAlbumsFromBackend()
      setCreateResult(false) // return createResult value to false
    } catch {
      console.log("didn't get from backend")
    }
  }, [createResult])
}
```

Next we need to start making this custom hook more reusable.

We changed `albums` to the more generic `data` throughout.

Updated the getAlbums async function to getData with a url parameter.

Finally we add a return statement with our state variables/functions that are required by the component.

```js
export const useBackend = url => {
  const [data, setData] = useState([]) // Changed albums to data
  const [createResult, setCreateResult] = useState(false)

  useEffect(() => {
    const getDataFromBackend = async () => {
      console.log("Call to backend on page load", url)
      const dataFromBackend = await getData(url) //Updated our getAlbums function
      console.log("Response from backend ", dataFromBackend)
      setData(dataFromBackend) // Changed albums to data
    }

    try {
      getDataFromBackend()
      setCreateResult(false)
    } catch {
      console.log("didn't get from backend")
    }
  }, [createResult])

  return { data, setCreateResult } // Return state variables/functions
}
```

Our resulting componenet now only needs to call this custom hook as below.

```js
import React, { useState } from "react"
import AlbumSelector from "./AlbumSelector"
import CreateAlbum from "./CreateAlbum"
import { useBackend } from "./backend"

const Filters = () => {
  const [currentAlbums, setCurrentAlbums] = useState([])

  const url = "http://127.0.0.1:8081/"
  const albumsURL = url + "albums"

  const { data: albums, setCreateResult } = useBackend(albumsURL) // New custom hook

  return (
    <div className="filters">
      <AlbumSelector
        albums={albums}
        currentAlbums={currentAlbums}
        setCurrentAlbums={setCurrentAlbums}
      />
      <CreateAlbum setCreateResult={setCreateResult} />
    </div>
  )
}

export default Filters
```

Looks much better!
