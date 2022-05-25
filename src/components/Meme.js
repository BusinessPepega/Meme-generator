//import memesData from "../memesData.js"
import React, { useEffect } from "react"

export default function Meme() {    
    
    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg", 
        alt: ""              
    })     

    const [allMeme, setAllMeme] = React.useState("")
    
    // useEffect(()=>
    //     {fetch("https://api.imgflip.com/get_memes")
    //         .then(response => response.json())
    //         .then(data => setAllMeme(data.data.memes))
    //     }, []) 
    
    useEffect(() => {
        async function getMeme(){
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMeme(data.data.memes)
        }
        getMeme()
    }, [])
        
    
       

    function getMemeImage() {        
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const randomImage = allMeme[randomNumber].url
        const alt = allMeme[randomNumber].name
        setMeme(prevMeme => ({...prevMeme, 
                                randomImage : randomImage,
                                alt : alt 
                             }))
    }   

    const [memeText, setMemeText] = React.useState({
        topText : "",
        bottomText : ""
    })

    function textInput(event){
        const {name, value} = event.target
        setMemeText((prevText) => ({
            ...prevText,
            [name] : value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={textInput}
                    name="topText"
                    value={memeText.topText}
                />
                <input 
                    name="bottomText"
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={textInput}
                    value={memeText.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt={meme.alt}/>
                <h2  name="topText" className="meme--text top">{memeText.topText}</h2>
                <h2  name="bottomText" className="meme--text bottom">{memeText.bottomText}</h2>
            </div>
        </main>
    )
}