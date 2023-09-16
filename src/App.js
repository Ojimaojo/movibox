import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";  
//import logo from './logo.svg';
import './App.css';
//import Detail from './components/homeComponents/detail';
import Home from './components/homeComponents/home';
import { SupProvider } from './context/SupContext';
import SingleMovie from './components/DetailComponents/singleMovie';
import Footer from './components/homeComponents/footer';

function App() {
  return (
    <BrowserRouter>
      <SupProvider>
          <Routes >
          <Route  path="/movie/:id"  element={<SingleMovie/>}/>
          <Route  path="/" exact element={<Home />}/>
          </Routes >
          <Footer />
      </SupProvider>
    </BrowserRouter>
  );
}

export default App;


