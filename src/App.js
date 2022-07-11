import './App.css'

import React, { createContext } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import { Container } from "./components"

import drillOptions from './stores/optionsStore';

export const OptionsContext = createContext()

export default function App() {

  return (
    <Router>
      <OptionsContext.Provider value={drillOptions}>
        <div className='App'>
          <Container/>
        </div>
      </OptionsContext.Provider>
    </Router>
  )
}
