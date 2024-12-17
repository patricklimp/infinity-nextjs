export async function getUserTopTracks(token:string):Promise<TrackItem[]> {
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=10&offset=0",{headers:{Authorization:`Bearer ${token}`}})
    if(!response.ok){
        return []
    }
    const page = await response.json() as PagedResult<TrackItem>
        return page.items
}
interface PagedResult<T> {
    total: number
    items: T[]
  }
  
export  interface TrackItem {
    name: string
    uri: string
    artists: ArtistItem[]
    album: Album
  }
  
export  interface Album {
    images: ItemImage[]
    name: string
  }
  
export  interface ItemImage {
    url: string
    height: number
    width: number
  }
export  interface ArtistItem {
    name: string,
  }