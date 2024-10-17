interface PhotosProps{leftImage: string,
    rightImage: string
}


export default function Photos(props:PhotosProps){
    return(
        <>
        <div className="moldura">
                             <img src={props.leftImage} alt="imagem do artista" className="imagem-moldura"/>
                        </div>
                         <div className="moldura">
                            <img src={props.rightImage} alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
        </>
    )
}