import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Getstarted from './pages/getstarted/Getstarted.jsx'
import Register from './components/register/Register.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App/>} exact={true}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/getstarted" element={<Getstarted/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
