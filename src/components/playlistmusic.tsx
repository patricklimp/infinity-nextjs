interface PlaylistMusicProps {
    artist: string;
    music: string;
}

export default function PlaylistMusic(props:PlaylistMusicProps){
    return (
        <>

            <p className="titulo-musica">{props.artist}</p>
            <hr/>
            <p className="titulo-musica w-5/6 truncate text-center">{props.music}</p>
        
        </>
   )     
}