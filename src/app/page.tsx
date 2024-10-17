import PlaylistItem from "@/components/playlistItem";
import Image from "next/image";

const musics = [{
  numero:1, 
  artistName: 'Beyoncé',
  musicName: 'Halo',
  artistImage: 'style/assets/Beyoncé.jpeg',
  userImage: 'style/assets/midjourney.jpeg'
}, 
{
  numero:2, 
  artistName: 'Ariana Grande',
  musicName: 'Sometimes Sometimes Sometimes Sometimes',
  artistImage: 'style/assets/download (38).jpeg',
  userImage: 'style/assets/midjourney.jpeg'
}]

export default function Home() {
  return (
   <>
   <header>
        <button className="botao-menu">Menu</button>
        <div className="moldura">
            <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
        </div>
    </header>

    <main>
        <section className="playlist">
            <div className="moldura-numero">
            --
            </div>
            <div className="playlist-tema">
                <p className="playlist-titulo">Ganhe seu Selo favorito</p>
                <hr/>
                <p className="playlist-subtitulo">Coloque na playlist sua musica favorita do artista.</p>
            </div>
            <div className="moldura">
                <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
            </div>
        </section>

        <div className="botao-content">
            <button className="botao-sugerir">Sugerir Música</button>
        </div>
        
        <section className="playlist-conteudo">

            
            {musics.map(music=>(
              <PlaylistItem numero={music.numero}
              artistName={music.artistName}
              musicName={music.musicName}
              artistImage={music.artistImage}
              userImage={music.userImage}
              key={music.numero}/>
            ))}

            <div className="playlist-item">
                <div className="moldura-numero">
                     3
                </div>
                <div className="playlist-musica">
                    <p className="titulo-musica">Bruno Mars</p>
                    <hr/>
                    <p className="titulo-musica">Locked Out of...</p>
                </div>

                    <div className="container-imagem">
                        <div className="moldura">
                             <img src="style/assets/download (39).jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                         <div className="moldura">
                            <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                    </div>
                
            </div>
            <div className="playlist-item">
                <div className="moldura-numero">
                     4
                </div>
                <div className="playlist-musica">
                    <p className="titulo-musica">Tinashe</p>
                    <hr/>
                    <p className="titulo-musica">Flame</p>
                </div>

                    <div className="container-imagem">
                        <div className="moldura">
                             <img src="style/assets/download (40).jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                         <div className="moldura">
                            <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                    </div>
                
            </div>
            <div className="playlist-item">
                <div className="moldura-numero">
                     5
                </div>
                <div className="playlist-musica">
                    <p className="titulo-musica">Lady GaGa</p>
                    <hr/>
                    <p className="titulo-musica">Lovegame</p>
                </div>

                    <div className="container-imagem">
                        <div className="moldura">
                             <img src="style/assets/Mm yea.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                         <div className="moldura">
                            <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura"/>
                        </div>
                    </div>
                
            </div>
            
        </section>
    </main>
    </>
  );
}
