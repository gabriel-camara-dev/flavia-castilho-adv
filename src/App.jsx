import { useState } from 'react'
import logo from './assets/logo.png'
import { WhatsappLogo } from 'phosphor-react'
import './global.css'
import './App.css'

function App() {
  return (
    <>
      <header>
        <img src={logo}/>
        <div className='section'>
          <div className='section-box'>
            <h1 className='titulo-header'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deserunt, minus consequatur rem laboriosam aliquid ut nostrum dolorem obcaecati adipisci incidunt.</h3>
            <button className='contato'><WhatsappLogo size={24} />FALE COM UM ESPECIALISTA</button>
          </div>
        </div>
        <div className='ajuda'>
          <div>
            <h1 className='titulo-ajuda'>Como podemos te ajudar?</h1>
            <h3>Somos um escritório especializado em Direito das Famílias, Direito do Consumidor e Direito Tributário</h3>
          </div>
          <ul className='cards'>

            <li className='card'>
              <WhatsappLogo size={56} className='icon' />
              <h3>WHATSAPP</h3>
              <p>Somos um escritório especializado em Direito Civil</p>
            </li>

            <li className='card'>
              <WhatsappLogo size={56} className='icon'/>
              <h3>WHATSAPP</h3>
              <p>Somos um escritório especializado em Direito Civil</p>
            </li>

            <li className='card'>
              <WhatsappLogo size={56} className='icon'/>
              <h3>WHATSAPP</h3>
              <p>Somos um escritório especializado em Direito Civil</p>
            </li>

            <li className='card'>
              <WhatsappLogo size={56} className='icon'/>
              <h3>WHATSAPP</h3>
              <p>Somos um escritório especializado em Direito Civil</p>
            </li>

            <li className='card'>
              <WhatsappLogo size={56} className='icon'/>
              <h3>WHATSAPP</h3>
              <p>Somos um escritório especializado em Direito Civil</p>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default App
