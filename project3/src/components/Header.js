import React from "react";
import memeLogo from "../meme.png"

export default function Header() {
    return (
        <header className="header">
            <div className="head-div">
                <img src={memeLogo} className="meme-logo" />
                <h1>Meme Generator</h1>
            </div>
            <h3>React Course - Project3</h3>
        </header>
    )
}