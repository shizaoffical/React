// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AppLayout from './components/AppLayout';
// import Home from './components/HomePage';

import Cards from "./components/Cards";


function App() {

 return(

    <Cards />


    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/' element={<AppLayout />}>
    //             <Route index element={<Home />} />
    //             <Route path="contact-us" element={<p>This is paragraph</p>} />
    //         </Route>
    //     </Routes>
    // </BrowserRouter>
 );
}

export default App;