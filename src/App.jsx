import { useState } from 'react'
import TranslateSection from './components/TranslateSection/TranslateSection'
import TranslateSectionResult from './components/TranslateSectionResult/TranslateSectionResult'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [translate, setTranslate] = useState({
    "text":'Hello, how are you?',
    "language":'en',
    "languageTotranslate": 'fr'
  })
  const [phraseTranslated, setPhraseTranslated] = useState("")

  //to change Languages
  const [langChangeLeft, setLangChangeLeft] = useState("")
  const [langChangeRight, setLangChangeRight] = useState("")
  const [textChange, setTextChange] = useState("")
  
  const handleTranslate = (toTranslate) => {
    console.log(toTranslate)
    setTranslate(prevTranslate =>{
      return {...prevTranslate, "text": toTranslate.text, "language":toTranslate.language} 
    })
  }
   const handleTranslateFromChild = (data) => {
     setTranslate(prevTranslate =>{
       return {...prevTranslate, "languageTotranslate": data} 
     })
   }

  const handleChangeLanguage = (data) => {
    console.log("handleChangeLanguage")

    setLangChangeLeft(translate.languageTotranslate)
    setLangChangeRight(translate.language)
    console.log(langChangeLeft)
    console.log(langChangeRight)


    setPhraseTranslated(translate.text)
    setTextChange(data)

    setTranslate(prevTranslate =>{
      return {...prevTranslate, "language":translate.languageTotranslate, "languageTotranslate": translate.language} 
    })
  }


  useEffect(()=>{
    const url = `https://api.mymemory.translated.net/get?q=${translate.text}&langpair=${translate.language}|${translate.languageTotranslate}`
    fetch(url)
      .then(response => response.json())
         .then(data => {
           console.log(data.responseData.translatedText)   
           const phrase = data.responseData.translatedText
           setPhraseTranslated(phrase)
         })
         .catch(error => {
             console.log(error)
         })
  },[translate])

  return (
    <div>
      <header>
        <img className="logo" src='images/logo.svg'></img>
      </header>
      <main>
        <TranslateSection lang={langChangeLeft} translateText={handleTranslate} data={textChange}/>
        <TranslateSectionResult lang={langChangeRight} data={phraseTranslated} onData={handleTranslateFromChild}  interchangeLanguage={handleChangeLanguage}/>
      </main>
    </div>
  )
}

export default App
