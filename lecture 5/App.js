import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import Container from './component/Container';
import Img from './component/Img';
import Media from './component/Media';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Container title = "watch1"/>} />
        <Route path='/contact-us' element={<Media title = "watch1"/>} />
        <Route path='/media' element={<h1>This is headint one</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>


/* <div>
  
<Navbar title = "new"/>

<Img/> 

<Footer/>
<Footer/>
 <Media/>
</div> */

  );
}

export default App;
