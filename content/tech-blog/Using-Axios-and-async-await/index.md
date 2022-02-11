---
title: Using Axios and async await
date: "2015-05-01T22:12:03.284Z"
description: "Example using Axios and async await to make call for data"
---

I like to create a separate function in my React project that will:

- make the call to the backend
- get the required data
- return it in the required format

This keeps the code in the REACT component very simple, as in getBlahBlahBlah. We don’t need to worry about the reformatting the data for use

```js
response.data.albums
```

```js
export const getAlbums = async () => {
  try {
    const response = await axios.get(albumsURL)
    console.log("backend before return", response.data.albums)
    return response.data.albums
  } catch (err) {
    console.log("get albums error", err)
    return []
  }
}
```

This function can be imported into the react component to be used in our useEffect hook
