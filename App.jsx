import './App.css'
import {BrowserRouter as Router ,Route ,Link  ,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  

  return (
    <Router>
      <div>
        <h1>React Router</h1>
    
        <nav>
          <ul>
          <li>
            <Link to= "https://www.guvi.in/">Home</Link>
          </li>
          <li>
            <Link to= "https://www.guvi.in/courses/?current_tab=offers">About</Link>
          </li>
          <li>
            <Link to= "https://www.guvi.in/courses/?current_tab=paidcourse">Contact</Link>
          </li>
         
         
           
            </ul>
        </nav>
      <Routes>
        <Route path='/' exact Component={Home}>Home</Route>
        <Route path='/about' exact Component={About}>About</Route>
        <Route path='/contact' exact Component={Contact}>Contact</Route>
      </Routes>
      </div>
    </Router>
  
  )
}

export default App
