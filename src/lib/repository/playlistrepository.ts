import PlaylistMusic from "@/components/playlistmusic"
import { playlist } from "@/data/mockdata"

export function fetchPlaylist() {
    return new Promise<Playlist>((resolve, reject) => {
        setTimeout(() => { resolve(playlist) }, 3000)
        //resolve(playlist)
    })

}

export function addMusic(music: SpotifyMusic) {
    return new Promise<Music>((resolve, reject) => {
        let song: Music = {
            numero: playlist.musics.length + 1,
            userImage: 'style/assets/midjourney.jpeg',
            ...music
        }
        let foundSong = playlist.musics.find((song) => {
            return song.musicName == music.musicName
        })

        if(foundSong) {
            reject("Você perdeu a sua música... adicione outra!")
        }
        else {
            playlist.musics.push(song)
            resolve(song)
        }
    })

}