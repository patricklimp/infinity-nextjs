"use client"
import PlaylistItem from "@/components/playlistItem";
import { musics, spotifyMusics } from "@/data/mockdata";
import { searchMusic } from "@/lib/repository/musicrepository";
import { addMusic, fetchPlaylist } from "@/lib/repository/playlistrepository";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Home() {
  const [showMusicInput, setShowMusicInput] = useState(false);
  const [searchText, setSearchText] = useState('')
  const [listMusic, setListMusic] = useState(spotifyMusics)
  const [playlist, setPlaylist] = useState<Playlist|undefined>(undefined)

  useEffect(()=>{
    fetchPlaylist().then((playlist)=>{setPlaylist(playlist)})
  }, [])

  function search(text: string) {
    setSearchText(text)
    //setListMusic()
    searchMusic(text).then((result)=>{
        setListMusic(result)
    })
  }
  function chooseMusic(music:SpotifyMusic){
    addMusic(music).then(() =>{
      setShowMusicInput(false)
    }).catch((error)=>{
      alert(error)
    })
    setSearchText('')
  }

  return (
    <>
      <header>
        <button className="botao-menu">Menu</button>
        <div className="moldura">
          <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura" />
        </div>
      </header>

      <main>
        <section className="playlist">
          <div className="moldura-numero">
            --
          </div>
          <div className="playlist-tema">
            <p className="playlist-titulo">Ganhe seu Selo favorito</p>
            <hr />
            <p className="playlist-subtitulo">Coloque na playlist sua musica favorita do artista.</p>
          </div>
          <div className="moldura">
            <img src="style/assets/midjourney.jpeg" alt="imagem do usuario" className="imagem-moldura" />
          </div>
        </section>

        <div className="botao-content">
          <button className="botao-sugerir" onClick={() => setShowMusicInput(true)}>Sugerir Música</button>
          {showMusicInput && (
            <input type="text" placeholder="Sugira a sua música." onChange={(event) => (search(event.target.value))} />
          )}

        </div>

        <div>
          {searchText.length > 0 && listMusic.map(music => (
            <div className="musicList" onClick={() => chooseMusic(music)}>
              {music.musicName} / {music.artistName}
            </div>
          ))}
        </div>

        <section className="playlist-conteudo">


          {playlist?.musics.map(music => (
            <PlaylistItem numero={music.numero}
              artistName={music.artistName}
              musicName={music.musicName}
              artistImage={music.artistImage}
              userImage={music.userImage}
              key={music.numero} />
          ))}

        </section>
      </main>
    </>
  );
}
