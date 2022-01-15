---
title: Creating Asynchronously and Updating React State
date: "2022-01-14T15:00:00.121Z"
description: "Create data in our backend, and updating state in front end to reflect this"
---

We have created an `async` call to our backend to get albums in the previous post.

This call, however, only runs once on the page load.

So when we hit our `createAlbum` button, even though we have updated the database, this change is not reflected on the front end

```js
// In our React component linked to our Textfield and onClick for button
const createNewAlbum = async () => {
  if (incorrectFormat(albumName)) {
    setError(true)
  } else {
    console.log("create new album", albumName)
    setTextOpen(false)
    const createResult = await createAlbum(albumName)
    console.log("create result is ", createResult)
  }
}
```

```js
// In our helper functions file, the async call to the backend
export const createAlbum = async albumName => {
  const newAlbum = { name: albumName }
  try {
    const response = await axios.post(albumsURL, newAlbum)
    console.log("create album success", response)
    return true
  } catch (err) {
    console.log("create album failed", err)
    return false
  }
}
```

> This results in the behaviour shown below

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Creating-asynchronously-and-updating-state/Recording%202022-01-14%20at%2015.30.31.gif?raw=true" width="600" height="400">

The create function is sucessful and has added a new album to the database, but this is not updated in our front end.

### Option 1 : Using depandancy array and useEffect cleanup

### Option 2 : Using useCallback ?

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
