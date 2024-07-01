import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/Title'
import './Styles.css'; // Ensure you import the CSS file where your class is defined
import HeroSection from './Components/HeroSection'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:'95%' , display:'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center' , margin:'auto'}}>
<Title/>
<HeroSection/>
<Footer/>
    </div>
  )
}

export default App
