import React from "react"
import { useState } from "react"
import './TranslateSectionResult.css'
import { useEffect } from "react"

export default function TranslateSection({data, onData}) {

    const [language, setLanguage] = useState('fr')
    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value)
    }
    
    useEffect(()=> {
        console.log(data)
        setText(data)
    },[data])
    
    let aLanguagesTranslated

    const handleClick = (filterLanguage) => {
        const filter = filterLanguage.target.attributes.value.nodeValue
        console.log(filter)
        aLanguagesTranslated.forEach(filterLang => {
            filterLang.classList.remove('active')
        })
        filterLanguage.target.classList.toggle('active')
        setLanguage(filter)
    }

    useEffect(() => {
        onData(language)
    },[language])

    const changeLanguage = () => {
        window.alert("gola")
    }

    const playText = () => {
        
    }
    
 

    useEffect(() =>{
        aLanguagesTranslated = document.querySelectorAll(".a-language-translated")
        aLanguagesTranslated.forEach( filterLanguage => {
            filterLanguage.addEventListener("click", handleClick)
        })
        const btnChangeLang = document.getElementById("btn-change-languages")
        btnChangeLang.addEventListener("click", changeLanguage)

        const btnPlayText = document.getElementById("btn-play-text-2")
        btnPlayText.addEventListener("click", playText)

        const textTranslate = document.getElementById("translate-2")
        const copyText = () => {
            console.log(textTranslate.value)
            navigator.clipboard.writeText(textTranslate.value)
            alert("Quote copied : " + textTranslate.value)
        }
        const btnCopyText = document.getElementById("btn-copy-text-2")
        btnCopyText.addEventListener("click", copyText)

    },[])


    return (
        <section className="section-translate">
            <div className="div-languages-button">
                <div className="languages-translated">
                    <a className="a-language-translated" value='en'>English</a>
                    <a className="a-language-translated active" value="fr">French</a>
                    <a id="spanish-link" className="a-language-translated" value="es">Spanish<img src="/images/Expand_down.svg"></img></a>
                </div>
                <div>
                    <button className="btn-style" id="btn-change-languages">
                        <img src="images/Horizontal_top_left_main.svg"></img>
                    </button>
                </div>
            </div>
        <textarea  id="translate-2" className="text-to-translate" value={text} onChange={handleChange}></textarea >
            <div className="buttons">
                <div className="btn">
                    <button className="btn-style" id="btn-play-text-2">
                        <img src="images/sound_max_fill.svg"></img>
                    </button> 
                    <button className="btn-style" id="btn-copy-text-2">
                        <img src="images/Copy.svg"></img>
                    </button> 
                </div>
            </div>
        </section>
    )
}