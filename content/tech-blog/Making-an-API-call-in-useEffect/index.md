---
title: Making an API call in useEffect
date: "2022-01-14T13:00:00.121Z"
description: "Making asychronous API call in useEffect Hook"
---

To make async call for data, on page load. Plus possibly handle the wait in react if slow.

We have our async function which makes a call to our backend. (<- Hyperlink)

We now want to get this data and use it in our REACT application.

In order to get this data we need to call for it in our useEffect Hook.

```js
useEffect(() => {
  const getAlbumsFromBackend = async () => {
    const albumsFromBackend = await getAlbums()
    setAlbums(albumsFromBackend)
  }

  try {
    getAlbumsFromBackend()
  } catch {
    console.log("didn't get from backend")
  }
}, [])
```

> useEffect does not allow us to use async directly, we must first create an `async` function `getAlbumsFromBackend()` which is then called in our try catch statement.

```js
useEffect(() => {
    // code to be run when hook is called
        }
 }, []) // empty dependancy array
```

> The second parameter of the `useEffect` hook is the dependancy array `[]`. This has been left empty, which means this will trigger after the first render of the component (i.e. on page load).

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Making-an-API-call-in-useEffect/Recording%202022-01-14%20at%2013.35.40.gif?raw=true" width="600" height="400">

```js
// Could go into useCallback here
```
