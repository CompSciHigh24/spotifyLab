// U2L15: Spotify POST Request Lab

// Create a Playlist:

// 1. Look through the Spotify API Documentation and find the end point for creating a playlist.
// Update the variable below called `createPlaylistURL` and add the URL, the user_id will be 31s5fcbgzo3pkww6ancnzov63cjm

let createPlaylistURL = "";

// 2. The documentation describes how to create the request body. Using that information update the object below called `newPlaylistBody`
// Add the name of the playlist, make sure it's public, and add a description with your name and section (+ whatever else you want)

const newPlaylistBody = {

};

// 3. Add `playlistData` as a parameter to the asynchronous function `createPlaylist`.

async function createPlaylist() {

  // 4. Build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newPlaylistBody` object into the body, make sure you stringify it

  const options = {};

  // 5. Use fetch() to send a POST request using the `createPlaylistURL` and options object. Console log the response.
  
}

// 6. Call your function `createPlaylist` with `newPlaylistBody` passed as the parameter. Take note of the ID it will be needed in the next request.
// Go to the Spotify Profile to see the playlist you created. (Or follow the URL in the response)
// https://open.spotify.com/user/31s5fcbgzo3pkww6ancnzov63cjm



// Add Songs to Playlist:

// 1. Look through the Spotify API Documentation and find the end point for adding songs to a playlist.
// Update the variable below called `addingSongsURL` and add the URL, use the playlist_id that you recieved from the function above

let addingSongsURL = "";

// 2. Find 3 songs on spotify and add them to the songs array below.
//    - The songs should be in the format: "spotify:track:<track_id>"
//    - Find the track id from the songs URL after track/ but before the queries
//    - Ex: https://open.spotify.com/track/6a6JDEQbXdxkWFRIA0pRqL?si=e9e0c29125a746f6 => spotify:track:6a6JDEQbXdxkWFRIA0pRqL

const songs = [];

// 3. The documentation describes how to create the request body. Using that information update the object below called `newSongsBody`
// Add the array `songs` into this object

const newSongsBody = {

};

// 4. Add `songData` as a parameter to the asynchronous function `addPlaylistSongs`.

async function addPlaylistSongs() {

  // 5. Inside the function build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newSongsBody` object into the body, make sure you stringify it

  const options = {
    
  };

  // 6. Use fetch() to send a POST request using the `addingSongsURL` and options object. Console log the response.
}

// 7. Call your function `addPlaylistSongs` with `newSongsBody` passed as the parameter.
// Refresh the page to your playlist, you should see your 3 new songs.
