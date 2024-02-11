import './App.css'
import TranslateSection from './components/TranslateSection/TranslateSection'

function App() {

  return (
    <div>
      <header>
        <img className="logo" src='images/logo.svg'></img>
      </header>
      <main>
        <TranslateSection/>
        <TranslateSection/>
      </main>
    </div>
  )
}

export default App
