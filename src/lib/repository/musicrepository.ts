import { spotifyMusics } from "@/data/mockdata"

export function searchMusic(text: string) {
    return new Promise<SpotifyMusic[]>((resolve, reject) => {
        let result = spotifyMusics.filter((music) => {
            if (music.musicName.includes(text) || music.artistName.includes(text)) {
                return true
            }
            else {
                return false
            }
        })
        resolve(result)
    })
}