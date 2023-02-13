import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import './fonts/Poppins-Regular.ttf'
import Header from './components/Header'
import UrlBox from './components/UrlBox'
import Card from './components/Card'
import brImg from './assets/icon-brand-recognition.svg'
import drImg from './assets/icon-detailed-records.svg'
import fcImg from './assets/icon-fully-customizable.svg'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <UrlBox />
      <main>
        <div className="main-container">
          <div className="main-header">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our advanced
              statistics dashboard.
            </p>
          </div>
          <div className="main-cards">
            <Card title="Brand Recognition" img={brImg}>
              <p> Boost your brand recognition with each click. Generic links don’t
                  mean a thing. Branded links help instil confidence in your content.</p>
            </Card>
            <Card title="Detailed Records" img={drImg}>
              <p>Gain insights into who is clicking your links. Knowing when and where
                  people engage with your content helps inform better decisions.</p>
            </Card>
            <Card title="Fully Customizable" img={fcImg}>
              <p>Improve brand awareness and content discoverability through customizable
                  links, supercharging audience engagement.</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
