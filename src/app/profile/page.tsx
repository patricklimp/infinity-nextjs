"use client"
import { getUserTopTracks, ItemImage, TrackItem } from "@/lib/spotify"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function profile(){
    const [musics, setMusic] = useState<TrackItem[] | undefined>(undefined);
  const session =  useSession()
    useEffect(()=>{
      console.log(session.data?.accessToken)
        if (session.data?.accessToken){
            getUserTopTracks(session.data?.accessToken).then((items)=>{setMusic(items)})
        }
    }, [session])

    const imageFor = (size: number, images: ItemImage[]) => {
        if (images.length < 0) { return undefined }
        return images.findLast((p) => p.width <= size) ?? images[0]
      }

    return (
        <div className=" text-white">
            pagina do perfil
            {musics && (musics.map((track) => (
              <div className="my-4 shadow-sm border-transparent border-b-orange-800 border-2">
                {imageFor(200, track.album.images) && (<img src={imageFor(200, track.album.images)?.url}></img>)}
                <p>{track.name} ({track.album.name})</p>
                <p>{track.artists.map(a => a.name).join(', ')}</p>
              </div>)))}
        </div>
    )
}
