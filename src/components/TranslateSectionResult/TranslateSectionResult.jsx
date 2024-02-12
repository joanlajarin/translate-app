import React from "react"
import { useState } from "react";
import './TranslateSectionResult.css'
import { useEffect } from "react";

export default function TranslateSection({data}) {

    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value)
    }
    
    useEffect(()=> {
        console.log(data)
        setText(data)
        
    },[data])
    
    return (
        <section className="section-translate">
            <div className="languages-translated">
                <a className="a-language-translated">English</a>
                <a className="a-language-translated active">French</a>
                <a id="spanish-link" className="a-language-translated">Spanish<img src="/public/images/Expand_down.svg"></img></a>
            </div>
        <textarea  className="text-to-translate" value={text} onChange={handleChange}></textarea >
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