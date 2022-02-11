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

> `album3` cannot be seen in the dropdown

The create function is sucessful and has added a new album to the database, but this is not updated in our front end.

### Naive Option 1 : Using depandancy array to force useEffect to fire

What if we create a state value that we update whenever we successfully create a new album.

Then we add this value to our useEffect dependency array, this should result in the effect being fired everytime this value is changed.

```js
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
  } catch {
    console.log("didn't get from backend")
  }
}, [createResult]) // we want this to trigger when we create an album
```

Now we can pass `setCreateResult` down through props to our component where we are creating a new album and change it's value

```js
const createNewAlbum = async () => {
  if (incorrectFormat(albumName)) {
    setError(true)
  } else {
    console.log("create new album", albumName)
    setTextOpen(false)
    const createResult = await createAlbum(albumName)
    console.log("create result is ", createResult)
    setCreateResult(createResult) // This should trigger our useEffect
  }
}
```

How'd we do?

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Creating-asynchronously-and-updating-state/Recording%202022-01-15%20at%2011.19.00.gif?raw=true" width="600" height="400">

Looks pretty good, but hang on...

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Creating-asynchronously-and-updating-state/Recording%202022-01-15%20at%2011.21.16.gif?raw=true width="600" height="400">

When we try to create another album, it doesnt work.

This is because the `createResult` value has not actually changed this time. It was set as false, then we updated it to true when we created album6.

So when we created album7 and set it to true, we didn't actually change the value. Therefore the useEffect did not actually trigger.

### Naive Option 2 :

So maybe we can just change `createResult` back to false when we make our call to the backend

```js
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
```

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/Creating-asynchronously-and-updating-state/Recording%202022-01-15%20at%2011.50.17.gif?raw=true" width="600" height="400">

Seems to work! But feels pretty hacky and messy

> Also note the useEffect needlessly firing a second time in the console, after we change `createResult` to false

