import troll from "./TrollFace.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll} 
                className="header--image"
                alt="troll face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React - test project</h4>
        </header>
    )
}