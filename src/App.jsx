import { useState } from 'react'
import './App.css'
import TranslateSection from './components/TranslateSection/TranslateSection'
import TranslateSectionResult from './components/TranslateSectionResult/TranslateSectionResult'
import translatePhrase from "../src/services/translatePhrase.js"

function App() {

  const [phraseTranslated, setphraseTranslated] = useState()

  const handleTranslate = (text) => {
    setphraseTranslated(translatePhrase(text))
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
