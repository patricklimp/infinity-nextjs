import Photos from "@/components/photos";
import PlaylistMusic from "@/components/playlistmusic";
import Order from "@/components/order";
interface PlaylistItemProps {
    numero: number;
    artistName: string;
    musicName: string;
    artistImage: string;
    userImage: string;
}


export default function PlaylistItem(props:PlaylistItemProps){
    return (
    <div className="playlist-item">
                <div className="moldura-numero">
                     <Order order={props.numero}/>
                </div>
                <div className="playlist-musica">
                    <PlaylistMusic artist={props.artistName} music={props.musicName}/>
                </div>

                    <div className="container-imagem">
                        <Photos leftImage={props.artistImage} rightImage={props.userImage}/>
                    </div>
                
            </div>
    )
}

