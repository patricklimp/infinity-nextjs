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
  musicName: 'Sometimes',
  artistImage: 'style/assets/download (38).jpeg',
  userImage: 'style/assets/midjourney.jpeg'
},
{
    numero:3, 
    artistName: 'Bruno Mars',
    musicName: 'Locked Out of Heaven',
    artistImage: 'style/assets/download (39).jpeg',
    userImage: 'style/assets/midjourney.jpeg'
  },
  {
    numero:4, 
    artistName: 'Tinashe',
    musicName: 'Flame',
    artistImage: 'style/assets/download (40).jpeg',
    userImage: 'style/assets/midjourney.jpeg'
  },
  {
    numero:5, 
    artistName: 'Lady GaGa',
    musicName: 'Lovegame',
    artistImage: 'style/assets/Mm yea.jpeg',
    userImage: 'style/assets/midjourney.jpeg'
  }  
]

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
            
        </section>
    </main>
    </>
  );
}
