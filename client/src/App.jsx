
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Routes>
    <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
