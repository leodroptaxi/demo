import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Website from './website/Website'
import Website1 from './website/Website1'
import Website2 from './website/Website2'
import Website3 from './website/Website3'
import Website4 from './website/Website4'
import Website5 from './website/Website5'
import Website6 from './website/Website6'
import Website7 from './website/Website7'
import Website8 from './website/Website8'
import Website9 from './website/Website9'
import Website10 from './website/Website10'
import Website11 from './website/Website11'
import Website12 from './website/Website12'
import Website13 from './website/Website13'
import Form from './website/Form'

function App() {
  return (
    <div>
  <BrowserRouter>
  <Routes>
    <Route path='/0' element={<Website/>}/>
    <Route path='/1' element={<Website1/>}/>
    <Route path='/2' element={<Website2/>}/>
    <Route path='/3' element={<Website3/>}/>
    <Route path='/4' element={<Website4/>}/>
    <Route path='/5' element={<Website5/>}/>
    <Route path='/6' element={<Website6/>}/>
    <Route path='/7' element={<Website7/>}/>
    <Route path='/8' element={<Website8/>}/>
    <Route path='/9' element={<Website9/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/10' element={<Website10/>}/>
    <Route path='/11' element={<Website11/>}/>
    <Route path='/12' element={<Website12/>}/>
    <Route path='/13' element={<Website13/>}/>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
