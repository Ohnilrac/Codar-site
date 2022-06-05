import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './components/Header'
import { Budget } from './components/Budget'
import { More } from './components/More'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>;
    <Budget/>
    <More/>
    <Testimonials/>
    <Footer/>
  </React.StrictMode>
);

