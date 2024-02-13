import React from "react"
import { useState, useEffect } from "react"
import './TranslateSection.css'

export default function TranslateSection({translateText, data, lang}) {

    let synth
    let voices
    let aLanguages

    const [toTranslate, setToTranslate] = useState({
        "text":'Hello, how are you?',
        "language":'en'
    })
    const [totalLetters, setTotalLetters] = useState(0)
    //check initial render
    const [isInitialRender, setIsInitialRender] = useState(true)

 //   const [textTrans, setTextTrans] = useState(translateText(text))
    useEffect(()=> {
        if(data != "") {
            console.log(data)
            setToTranslate(prevToTranslate => {
                return {...prevToTranslate, "text": data}
            })
        }
    },[data])

    const handleChange = (event) => {
        setToTranslate(prevToTranslate => {
            return {...prevToTranslate, "text": event.target.value}
        })
    }
    useEffect(() => {
        countLetters() 
    }, [toTranslate])

    useEffect(()=> {
         if(isInitialRender) {
             setIsInitialRender(false)
         } else {
             console.log("lang useEffect")
             console.log(lang)
             //poner el lenguage al que venga
                 setToTranslate(prevToTranslate => {
                     return {...prevToTranslate, "language": lang}
                 })
             //quitar todos los gighlights
                         //seleccionar el filtro del lenguaje correcto

             aLanguages = document.querySelectorAll(".a-language")

             aLanguages.forEach(filterLang => {
                 filterLang.classList.remove('active')
                 if(filterLang.attributes.value.nodeValue === lang){
                    filterLang.classList.toggle('active')
                 }
             })

         }

     },[lang])

    const countLetters = () => {
        setTotalLetters(toTranslate.text.length) 
    }

    function translate() {
        translateText(toTranslate)
    }


    const handleClick = (filterEl) => {
        if (filterEl !== undefined) {
            const filter = filterEl.target.attributes.value.nodeValue
            aLanguages.forEach(filterLang => {
                filterLang.classList.remove('active')
            })
            filterEl.target.classList.toggle('active')
            setToTranslate(prevToTranslate => {
                return {...prevToTranslate, "language": filter}
            })
        }
    }
    
    const playText = () => {
        synth = window.speechSynthesis
        voices = synth.getVoices().filter(function(voice) {
            return voice.lang.startsWith(toTranslate.language)
        })   
        speechSynthesis.cancel()
        if(voices.length > 0) {
            let utterance = new SpeechSynthesisUtterance(toTranslate.text)
            utterance.rate = 1
            utterance.lang = toTranslate.language
            speechSynthesis.speak(utterance)
        }
     }
    
     const copyText = () => {
         console.log(toTranslate.text)
         navigator.clipboard.writeText(toTranslate.text)
         alert("Text copied : " + toTranslate.text)
     }

    useEffect(() => {
        console.log("useEffect")
        synth = window.speechSynthesis
        voices = synth.getVoices().filter(function(voice) {
            return voice.lang.startsWith(toTranslate.language)
        })   
        const btnPlayText = document.getElementById("btn-play-text-1")
        btnPlayText.addEventListener("click", playText)
    },[toTranslate])
    
    useEffect(()=>{
                
        const btnTranslate = document.getElementById("btn-translate")
        btnTranslate.addEventListener("click", translate)

        aLanguages = document.querySelectorAll(".a-language")
        aLanguages.forEach(filterEl => {
            filterEl.addEventListener("click",handleClick)
        })


         const btnCopyText = document.getElementById("btn-copy-text-1")
         btnCopyText.addEventListener("click", copyText)
    },[])
    return (
        <section className="section-translate">
            <div className="languages">
                <a className="a-detect-language">Detect Language</a>
                <a className="a-language active" value="en">English</a>
                <a className="a-language" value="fr">French</a>
                <a id="spanish-link" className="a-language" value="es">Spanish<img src="/images/Expand_down.svg"></img></a>
            </div>
        <textarea id="translate-1" className="text-to-translate" value={toTranslate.text} onChange={handleChange} maxLength="500"></textarea >
        <span className="letters">{totalLetters}/500</span>
            <div className="buttons">
                <div className="btn">
                    <button className="btn-style" id="btn-play-text-1">
                        <img src="images/sound_max_fill.svg"></img>
                    </button> 
                     <button className="btn-style" id="btn-copy-text-1">
                        <img src="images/Copy.svg"></img>
                    </button>
                </div>
                <button id="btn-translate" onClick={translate}><img src="images/Sort_alfa.svg"></img>Translate</button>
            </div>
        </section>
    )
}