import React, { useRef } from 'react'
import './App.css'
import * as tf from '@tensorflow/tfjs'
import * as bodyPix from '@tensorflow-models/body-pix'
import Webcam from 'react-webcam'

export default function App() {

  const webcamRef  = useRef(null)
  const canvasRef = useRef(null)

  return (
    <>
      <div className="App">
        <header className="App-header">
      
        </header>
      </div>
    </>
  )
}
