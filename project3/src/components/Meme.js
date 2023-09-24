import React from "react"

export default function Meme(props) {

    const [meme , setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/345v97.jpg"
        }
    )
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    // console.log(allMemes)

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name , value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form" >
                <input
                    type="text"
                    placeholder="Top Text"
                    className="input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="button">Get a New Meme Image 🖼</button>
            </div>
            <div className="wrapper">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}