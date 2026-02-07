import { useState } from 'react'
import './App.css'
import InputControlado from './components/InputControlado'
import SoloNumeros from './components/SoloNumeros'
import InputNoControlado from './components/InputNoControlado'

function App() {

  return (
    <>
      <InputControlado />

      <SoloNumeros />

      <InputNoControlado />

    
    </>
  )
}

export default App
