import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Headers'
import  Main  from './components/Main'


function App() {
    console.log('App re-render')
    return <div>

        <Header/>
        <Main/>
        <Footer/>

    </div>
  
 
}

export default App
