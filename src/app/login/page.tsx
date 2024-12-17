"use client"
import { signIn } from "next-auth/react"

export default function login(){
    return (
        <section className="login">
            <div className="login-spotify">
                <img className="image-logo" src="style/assets/spotify.png" alt="Logo do Spotify" />
                <button onClick={() =>{signIn('spotify')}}>Conecte-se com spotify</button>
            </div>
        </section>
    )
}