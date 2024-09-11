import './App.css'
import FirstComponent from './components/FirstComponent'
import FourthComponent from './components/FourthComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function Up() {
  return (
    <div><FirstComponent/> <SecondComponent/> <ThirdComponent/> <FourthComponent/></div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstComponent/>}/>
      <Route path='/SecondComponent' element={<SecondComponent/>}/>
      <Route path='/ThirdComponent' element={<ThirdComponent/>}/>
      <Route path='/FourthComponent' element={<FourthComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App