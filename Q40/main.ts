// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
   let album: {artist: string, title: string, tracks?: number} = {
    artist: artist_name,
    title: album_title,

   };
  
   if (tracks !== undefined){
     album.tracks = tracks
   }


   return album;

}


// calling three function and c reating 3 variables with diffrent values 
 let album1 = make_album("Manahil", "Album title 1");
 let album2 = make_album("Hamza", "Album title 2");

 // calling a amke_album function with third parameter
 let album3 = make_album("Ali", "Album title 3",10);

 //Print the variables

 console.log(album1);

 console.log(album2);

 console.log(album3);