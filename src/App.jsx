import Button from './components/Button'
import Card from './components/Card'
import phrases from './utils/phrases.json'
import getRandomIndex from './utils/getRandomIndex'
import { useState } from 'react'
import './App.css'
import logo from './assets/photos/harry-potter-logo.png'

const imgs = [1, 2, 3, 4]

function App() {
  const [phraseRandom, setPhraseRandom] = useState(getRandomIndex(phrases))
  const [numberImg, setNumberImg] = useState(getRandomIndex(imgs))
  
  const appStyle = {
    backgroundImage: `url('/backgrounds/bg${numberImg}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
       <img src={logo} alt="" />
       <Card phraseRandom={phraseRandom} />
       <Button setPhraseRandom={setPhraseRandom} setNumberImg={setNumberImg} />
    </div>
  )
}

export default App
