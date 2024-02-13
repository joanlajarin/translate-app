import React from "react"
import { useState } from "react"
import './TranslateSectionResult.css'
import { useEffect } from "react"

export default function TranslateSection({data, interchangeLanguage, onData, lang}) {
    let synth
    let voices
    let aLanguagesTranslated


    const [language, setLanguage] = useState('fr')
    const [text, setText] = useState('');
    //check initial render
    const [isInitialRender, setIsInitialRender] = useState(true)

    
    useEffect(()=> {
        console.log(data)
        setText(data)
    },[data])
    
    function changeLanguage() {
        console.log(text)
        interchangeLanguage(text)
    }

    useEffect(()=> {
        if(isInitialRender) {
            setIsInitialRender(false)
        } else {
            console.log("lang useEffect")
            console.log(lang)
            //poner el lenguage al que venga
            setLanguage(lang)

            //quitar todos los gighlights
                        //seleccionar el filtro del lenguaje correcto

            aLanguagesTranslated = document.querySelectorAll(".a-language-translated")

            aLanguagesTranslated.forEach(filterLang => {
                filterLang.classList.remove('active')
                if(filterLang.attributes.value.nodeValue === lang){
                    filterLang.classList.toggle('active')
                }
            })
        }
    },[lang])


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



    const playText = () => {
        synth = window.speechSynthesis
        voices = synth.getVoices().filter(function(voice) {
            return voice.lang.startsWith(language)
        })   
        speechSynthesis.cancel()
        if(voices.length > 0) {
            let utterance = new SpeechSynthesisUtterance(text)
            utterance.rate = 1
            utterance.lang = language
            speechSynthesis.speak(utterance)
        }
    }
    useEffect(() => {
        console.log("useEffect")
        synth = window.speechSynthesis
        voices = synth.getVoices().filter(function(voice) {
            return voice.lang.startsWith(language)
        })   
        const btnPlayText = document.getElementById("btn-play-text-2")
        btnPlayText.addEventListener("click", playText)
        
    },[text])


    useEffect(() =>{
        aLanguagesTranslated = document.querySelectorAll(".a-language-translated")
        aLanguagesTranslated.forEach( filterLanguage => {
            filterLanguage.addEventListener("click", handleClick)
        })

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
    function nothing(){
        
    }

    return (
        <section className="section-translate">
            <div className="div-languages-button">
                <div className="languages-translated">
                    <a className="a-language-translated" value='en'>English</a>
                    <a className="a-language-translated active" value="fr">French</a>
                    <a id="spanish-link" className="a-language-translated" value="es">Spanish<img src="/images/Expand_down.svg"></img></a>
                </div>
                <div>
                    <button className="btn-style" id="btn-change-languages" onClick={changeLanguage}>
                        <img src="images/Horizontal_top_left_main.svg"></img>
                    </button>
                </div>
            </div>
        <textarea  id="translate-2" className="text-to-translate" value={text} onChange={nothing}></textarea >
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