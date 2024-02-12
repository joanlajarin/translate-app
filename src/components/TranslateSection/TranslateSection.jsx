import React from "react"
import { useState, useEffect } from "react"
import './TranslateSection.css'

export default function TranslateSection({translateText}) {

    const [text, setText] = useState('Hello, how are you?')
 //   const [textTrans, setTextTrans] = useState(translateText(text))

    const handleChange = (event) => {
      setText(event.target.value)
    }

    function translate() {
        console.log("translate")
        console.log(text)
        translateText(text)
    }

    useEffect(() => {
        const btnTranslate = document.getElementById("btn-translate")
        btnTranslate.addEventListener("click", translate)
    },[])
    

    return (
        <section className="section-translate">
            <div className="languages">
                <a className="a-language">Detect Language</a>
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
                <button id="btn-translate" onClick={translate}><img src="images/Sort_alfa.svg"></img>Translate</button>
            </div>
        </section>
    )
}