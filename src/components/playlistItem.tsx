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
                     {props.numero}
                </div>
                <div className="playlist-musica">
                    <p className="titulo-musica">{props.artistName}</p>
                    <hr/>
                    <p className="titulo-musica w-5/6 truncate text-center">{props.musicName}</p>
                </div>

                    <div className="container-imagem">
                        <Photos leftImage={props.artistImage} rightImage={props.userImage}/>
                    </div>
                
            </div>
    )
}

interface PhotosProps{leftImage: string,
    rightImage: string
}

function Photos(props:PhotosProps){
    return(
        <>
        <div className="moldura">
                             <img src={props.leftImage} alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                         <div className="moldura">
                            <img src={props.rightImage} alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
        </>
    )
}