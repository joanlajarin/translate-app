import { useState } from 'react'
import './App.css'
import TranslateSection from './components/TranslateSection/TranslateSection'
import TranslateSectionResult from './components/TranslateSectionResult/TranslateSectionResult'
import translatePhrase from './services/translatePhrase'

function App() {

  const [phraseTranslated, setPhraseTranslated] = useState("")

  const handleTranslate = (text) => {
    console.log(text)

    const url = `https://api.mymemory.translated.net/get?q=${text}!&langpair=en|fr`
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
