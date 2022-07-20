import './App.css'

import React, { createContext } from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import { Container } from "./components"

import drillOptions from './stores/optionsStore';
import stats from './stores/statsStore';

export const OptionsContext = createContext()
export const StatsContext = createContext()

export default function App() {

  return (
    <Router>
      <OptionsContext.Provider value={drillOptions}>
        <StatsContext.Provider value={stats}>
          <div className='App'>
            <Container/>
          </div>
        </StatsContext.Provider>
      </OptionsContext.Provider>
    </Router>
  )
}
