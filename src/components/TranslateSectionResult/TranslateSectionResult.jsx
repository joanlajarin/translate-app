import React from "react"
import { useState } from "react";
import './TranslateSectionResult.css'

export default function TranslateSection() {

    const [text, setText] = useState('Hello, how are you?');

    const handleChange = (event) => {
      setText(event.target.value)
    }
    
    return (
        <section className="section-translate">
            <div className="languages">
                <a className="a-language">English</a>
                <a className="a-language">French</a>
                <a id="spanish-link" className="a-language">Spanish<img src="/public/images/Expand_down.svg"></img></a>
            </div>
        <textarea  className="text-to-translate"  value={text} onChange={handleChange}></textarea >
            <div className="buttons">
                <div className="btn">
                    <button className="btn-style">
                        <img src="images/sound_max_fill.svg"></img>
                    </button> 
                    <button className="btn-style">
                        <img src="images/Copy.svg"></img>
                    </button>
                </div>
            </div>
        </section>
    )
}