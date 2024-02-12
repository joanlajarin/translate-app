import { useState } from 'react'
import TranslateSection from './components/TranslateSection/TranslateSection'
import TranslateSectionResult from './components/TranslateSectionResult/TranslateSectionResult'
import './App.css'

function App() {

  const [translate, setTranslate] = useState({
    "text":'Hello, how are you?',
    "language":'en',
    "languageTotranslate": 'fr'
  })
  const [phraseTranslated, setPhraseTranslated] = useState("")

  
  const handleTranslate = (toTranslate) => {
    console.log(toTranslate)
    setTranslate(prevTranslate =>{
      return {...prevTranslate, "text": toTranslate.text, "language":toTranslate.language} 
    })

    const url = `https://api.mymemory.translated.net/get?q=${translate.text}!&langpair=${translate.language}|fr`
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
  }

  return (
    <div>
      <header>
        <img className="logo" src='images/logo.svg'></img>
      </header>
      <main>
        <TranslateSection translateText={handleTranslate}/>
        <TranslateSectionResult data={phraseTranslated}/>
      </main>
    </div>
  )
}

export default App
