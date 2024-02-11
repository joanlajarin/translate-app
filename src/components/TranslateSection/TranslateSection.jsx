import React from "react"
import './TranslateSection.css'

export default function TranslateSection() {
    
    return (
        <section className="section-translate">
            <div className="languages">
                <a className="a-language">Detect Language</a>
                <a className="a-language">English</a>
                <a className="a-language">French</a>
                <a className="a-language">Spanish</a>
            </div>
        <input className="text-to-translate" placeholder="Hello, how are you?"></input>
            <div className="buttons">
                <div className="btn">
                    <button className="btn-style">
                        <img src="images/sound_max_fill.svg"></img>
                    </button> 
                    <button className="btn-style">
                        <img src="images/Copy.svg"></img>
                    </button>
                </div>
                <button id="btn-translate"><img src="images/Sort_alfa.svg"></img>Translate</button>
            </div>
        </section>
    )
}