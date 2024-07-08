import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/Loginpage'
import { Provider } from 'react-redux'
import store from '../store/store'
function App() {

 return(
  <Provider store={store}>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/login" element={<Loginpage/>}/>
    <Route path="/register" element={<Registerpage/>}/>
  </Routes>
</BrowserRouter>
</Provider>
 )
}

export default App
