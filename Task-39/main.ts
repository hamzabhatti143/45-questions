function makeAlbum(artits:string , title: string, track?: number) {
    const album: any = {artits, title}
    if(track){
        album.track = track;
    }
    return album;
}

const album1 = makeAlbum("Artist 1", "Title 1");
console.log(album1)

const album2 = makeAlbum("Artist 2", "Title 2", 2);
console.log(album2)

const album3 = makeAlbum("Artist 3", "Title 3", 3);
console.log(album3)