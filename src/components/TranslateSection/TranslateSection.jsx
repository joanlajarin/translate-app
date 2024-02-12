import React from "react"
import { useState, useEffect } from "react"
import './TranslateSection.css'

export default function TranslateSection({translateText}) {

    const [toTranslate, setToTranslate] = useState({
        "text":'Hello, how are you?',
        "language":'en'

    })
    const [language, setLanguage] = useState('en')
    const [totalLetters, setTotalLetters] = useState(0)

 //   const [textTrans, setTextTrans] = useState(translateText(text))

    const handleChange = (event) => {
        setToTranslate(prevToTranslate => {
            return {...prevToTranslate, "text": event.target.value}
        })
    }
    useEffect(() => {
        countLetters() 
    }, [toTranslate])

    const countLetters = () => {
        setTotalLetters(toTranslate.text.length) 
    }

    function translate() {
        console.log("translate")
        console.log(toTranslate)
        translateText(toTranslate)
    }
    const handleClick = (filterEl) => {
        const filter = filterEl.target.attributes.value.nodeValue
        filterEl.target.classList.toggle('active')
        setLanguage(filter)
        console.log(language)
    }
    useEffect(() => {
        console.log("useEffect")
        const btnTranslate = document.getElementById("btn-translate")
        btnTranslate.addEventListener("click", translate)

        const aLanguages = document.querySelectorAll(".a-language")
        aLanguages.forEach(filterEl => {
            filterEl.addEventListener("click",handleClick)
        })
        countLetters()
    },[])
    

    return (
        <section className="section-translate">
            <div className="languages">
                <a className="a-detect-language">Detect Language</a>
                <a className="a-language active" value="en">English</a>
                <a className="a-language" value="fr">French</a>
                <a id="spanish-link" className="a-language" value="es">Spanish<img src="/public/images/Expand_down.svg"></img></a>
            </div>
        <textarea  className="text-to-translate" value={toTranslate.text} onChange={handleChange} maxLength="500"></textarea >
        <span className="letters">{totalLetters}/500</span>
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