---
title: "Converting Our Mock Rest Server to GraphQL"
date: "2022-01-17T15:00:00.121Z"
description: "We made a very basic REST server to act as backend for a local photo app. We will now change this to GraphQL in order to trial the client side Apollo library"
---

We first require the 'graphql' and 'express-graphql' packages to be installed.

The server can now be initialised.

```js
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    // add schema here
}));

app.listen(8081, () => {
    // query response
})
```
We now need to start defining a schema for graphql to use. We will star by creating a type object for an Album.

```js
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const AlbumType = new GraphQLObjectType({
    name: 'Album',
    fields: () => ({
        name: {type:GraphQLString}
    })
})
```

Next we need to define a Root Query. In our case this will be to get all of the albums in our mock database.

```js
const crud = require('./crud');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        albums: {
            type: new GraphQLList(AlbumType),
            resolve(parent, args) {
                // This is where we go and get the data for the query
                return crud.getResponse();
            }
        }

    }
})
```

We destructured some of the orignal code in the REST server into the crud module in order to reuse it. however we chanegd the format of it slightly to play nicer with GraphQL

```js
 const getResponse = () => {
    const albums = getAlbums();
    let response = {albums: []};
    albums.map((album, index) => {
      const albumJSON = { // Put the albums into this JSON format
         id: index,
         name: album
      };
      response.albums.push(albumJSON); // Then add to list
    })
    console.log(response);
    return response.albums;
```

With this we can now make a call from GraphiQL to get all our albums from the mock database.

<img src="https://github.com/jackpink/pink.ai/blob/master/content/blog/converting-mock-rest-server-to-graphql/Screenshot%20from%202022-01-18%2011-00-18.png?raw=true" width="600" height="400">