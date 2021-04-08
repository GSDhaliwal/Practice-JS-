const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
  },
  printPlaylists: function () {
    for (let playlist in this.playlists) {
      console.log(`${playlist}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`)
    }
  },
  printTracks: function() {
    for (let track in this.tracks) {
      console.log(`${track}: ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`)
      }
  },
  printPlaylist: function(playlistId) {
    console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`);
    for (let track in this.playlists[playlistId].tracks) {
      console.log(`${this.playlists[playlistId].tracks[track]}: ${this.tracks[this.playlists[playlistId].tracks[track]].name} by ${this.tracks[this.playlists[playlistId].tracks[track]].artist} (${this.tracks[this.playlists[playlistId].tracks[track]].album})`);
      }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    let randomTrackId = `t${this.generateUid()}`;
    this.tracks[randomTrackId] = {
      id: randomTrackId,
      name: name,
      artist: artist,
      album: album,
    }
  }
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
/*const printPlaylists = function(object) {
  for (let playlist in object.playlists) {
  console.log(`${playlist}: ${library.playlists[playlist].name} - ${library.playlists[playlist].tracks.length} tracks`)
  }
}*/

console.log('-----');
library.printPlaylists()
//printPlaylists(library)
console.log('-----');
console.log('next function');
console.log('-----');

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
/*const printTracks = function(object) {
  for (let track in object.tracks) {
    console.log(`${track}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
    }
}*/
library.printTracks();
console.log('-----');
//printTracks(library)
console.log('next function');
console.log('-----');

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
/*const printPlaylist = function(playlistId) {
  console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`);
  for (let track in library.playlists[playlistId].tracks) {
    console.log(`${library.playlists[playlistId].tracks[track]}: ${library.tracks[library.playlists[playlistId].tracks[track]].name} by ${library.tracks[library.playlists[playlistId].tracks[track]].artist} (${library.tracks[library.playlists[playlistId].tracks[track]].album})`);
    }
}*/
library.printPlaylist('p01');
console.log('-----');
//printPlaylist('p01');
console.log('next function');
console.log('-----');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}
library.addTrackToPlaylist('t03', 'p01')
library.printPlaylist('p01');
console.log('-----');
//addTrackToPlaylist('t03', 'p01')
//printPlaylist('p01');
console.log('next function');
console.log('-----');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
/*const addTrack = function(name, artist, album) {
  let randomTrackId = `t${generateUid()}`;
  library.tracks[randomTrackId] = {
    id: randomTrackId,
    name: name,
    artist: artist,
    album: album,
  }
}*/

library.addTrack("It Was a Good Day", "Ice Cube", "The Predtor");
//addTrack("It Was a Good Day", "Ice Cube", "The Predtor");
console.log(library.tracks)
console.log('-----');
console.log('next function');
console.log('-----');

// adds a playlist to the library
const addPlaylist = function(name) {
  let randomPlaylistId = `p${generateUid()}`;
  library.playlists[randomPlaylistId] = {
    id: randomPlaylistId,
    name: name,
    tracks: []
  }
}

addPlaylist("More Music");
console.log(library.playlists);
console.log('-----');
console.log('next function');
console.log('-----');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}